import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from '../../generated/prisma';
import { genericOAuth } from "better-auth/plugins"
import { PrismaPg } from '@prisma/adapter-pg';

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL
  }),
});

export const auth = betterAuth({
  trustedOrigins: [
    "https://auth.tkurbx.com",
    "http://localhost:3000",
  ],

  database: prismaAdapter(prisma, {
    provider: "mysql",
  }),

  advanced: {
    ipAddress: {
      disableIpTracking: true
    }
  },

  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["roblox", "discord"], // List of trusted providers for account linking
      allowDifferentEmails: true,
    }
  },

  user: {
    additionalFields: {
      robloxId: {
        type: "string",
        required: false,
        description: "The Roblox user ID",
      }
    }
  },

  socialProviders: {
    roblox: {
      clientId: process.env.ROBLOX_CLIENT_ID as string,
      clientSecret: process.env.ROBLOX_CLIENT_SECRET as string,

      mapProfileToUser: (profile) => {
        return {
          robloxId: profile.sub.toString(),
          name: profile.preferred_username,
          image: profile.picture,
          email: profile.preferred_username,
        };
      }
    },

    // discord: {
    //   clientId: process.env.DISCORD_CLIENT_ID as string,
    //   clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    //   scope: ["identify"],
    //   disableDefaultScope: true,

    //   mapProfileToUser: (profile) => {
    //     // Ensure 'name' and 'image' are 'string | undefined'
    //     const name = profile.username || profile.global_name; // This will already be string | undefined if both are undefined
    //     const image = profile.avatar; // This will be string | null from Discord, need to convert

    //     return {
    //       email: `${profile.id}@discord-user.better-auth.local`,
    //       // Convert `null` to `undefined` if necessary
    //       name: name ?? undefined,
    //       image: image ?? undefined, // Use nullish coalescing to convert null to undefined
    //     };
    //   }
    // },
  },

  plugins: [
    genericOAuth({
      config: [
        {
          providerId: "discord",
          clientId: process.env.DISCORD_CLIENT_ID as string,
          clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
          authorizationUrl: "https://discord.com/oauth2/authorize", // Use this URL
          tokenUrl: "https://discord.com/api/oauth2/token",
          scopes: ["identify"],
          redirectURI: `${process.env.BETTER_AUTH_URL}/api/auth/callback/discord`, // This should resolve correctly
          pkce: true, // <--- Add this line!
          userInfoUrl: "https://discord.com/api/users/@me",

          mapProfileToUser: (profile) => {
            const name = profile.username || profile.global_name;
            const image = profile.avatar;
            return {
              // Generate a unique, internal email for Better Auth's User model
              email: `${profile.id}@discord-user.better-auth.local`,
              name: name ?? undefined,
              image: image ?? undefined,
              emailVerified: true, // Tell Better Auth this internal email is "verified"
            };
          },
        },
      ]
    })
  ]
});

type Session = typeof auth.$Infer.Session;