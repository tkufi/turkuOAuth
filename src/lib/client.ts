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
        callbackURL: "/",
        // scopes: ["openid", "profile"],
    })
}

export function User() {
    return {
        sessionData: authClient.useSession(),
    }
}

export function linkSocial(socialProvider: string) {
    console.log(socialProvider)
    return authClient.linkSocial({
        provider: socialProvider,
        callbackURL: "/",
        scopes: ["identify"],
    });
}

export { authClient }