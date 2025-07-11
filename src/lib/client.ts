import { inferAdditionalFields } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"
import { auth } from "./auth"

const authClient = createAuthClient({
    plugins: [
        inferAdditionalFields<typeof auth>(),
    ],
})

export const signIn = async () => {
    const data = await authClient.signIn.social({
        provider: "roblox",
        callbackURL: "/auth",
    })
}

export function User() {
    return {
        sessionData: authClient.useSession(),
    }
}

export function linkSocial(provider: string) {
    return authClient.linkSocial({
        provider,
        callbackURL: "/auth",
    });
}

export { authClient }