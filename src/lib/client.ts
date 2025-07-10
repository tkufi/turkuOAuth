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
        provider: "roblox"
    })
}

export function User() {

    // const {data: session} = await authClient.useSession();
    // const account = await authClient.accountInfo({
    //     id: session?.user.id
    // });

    // return authClient.useSession();
    return {
        // account: await authClient.accountInfo({
        //     accountId: "accountId"
        // }),
        sessionData: authClient.useSession(),
        accounts: authClient.listAccounts(),
    }
}

export function linkSocial(provider: string) {
    return authClient.linkSocial({
        provider,
    });
}