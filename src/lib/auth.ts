import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

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

    discord: {
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    }
  },
});

type Session = typeof auth.$Infer.Session;