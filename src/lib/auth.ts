import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from '../../generated/prisma';
import { roblox } from "better-auth/social-providers";
import { createAuthMiddleware } from "better-auth/api";

const prisma = new PrismaClient();

export const auth = betterAuth({
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
      },
      discordId: {
        type: "string",
        required: false,
        description: "The Discord user ID",
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

      mapProfileToUser: (profile) => {
        return {
          discordId: profile.id, // Discord user ID
        };
      }
    }
  },

  // hooks: {
  //   after: createAuthMiddleware(async (ctx) => {
  //     const session = ctx.context.session;
  //     console.log("Session in after hook:", session);
  //     if (session) {
  //       const user = await prisma.user.findUnique({
  //         where: { id: session.user.id },
  //       });

  //       if (user) {
  //         // Update the user's Roblox ID if it exists in the session
  //         if (session.user.robloxId) {
  //           await prisma.user.update({
  //             where: { id: user.id },
  //             data: { robloxId: session.user.robloxId },
  //           });
  //         }

  //         // Update the user's Discord ID if it exists in the session
  //         if (session.user.discordId) {
  //           await prisma.user.update({
  //             where: { id: user.id },
  //             data: { discordId: session.user.discordId },
  //           });
  //         }
  //       }
  //     }
  //   }),
  // },
});

type Session = typeof auth.$Infer.Session;