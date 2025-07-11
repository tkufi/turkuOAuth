import { signIn, User, linkSocial, authClient } from "@/lib/client";
import { Box, Button, Divider } from "@mui/material";
import { Avatar } from "@mui/material"
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';

import { useCallback } from 'react';

type User = {
    data?: {
        user: {
            name: string;
            robloxId: string;
            username: string;
            image: string;
        }
    },
    isPending?: boolean;
    error?: Error | null;
};

type Props = {
    sessionData: User;
    [key: string]: any; // Allow additional props
};

export default function AuthButtons({ sessionData, ...props }: Props) {
    const router = useRouter();
    const [account, setAccount] = useState({
        robloxId: "",
        discordId: "",
        username: "",
        imageUrl: "",
    });

    const { data: session, isPending, error } = sessionData;

    useEffect(() => {
        const fetchAccountDetails = async () => {
            try {
                const accountData = await authClient.listAccounts();
                const robloxInfo = accountData.data?.find(usrAccount => usrAccount.provider === "roblox");
                const discordInfo = accountData.data?.find(usrAccount => usrAccount.provider === "discord");

                setAccount({
                    robloxId: robloxInfo?.accountId || "",
                    discordId: discordInfo?.accountId || "",
                    username: session?.user.name || "",
                    imageUrl: session?.user.image?.toString() || "",
                });

                if (robloxInfo && discordInfo) {
                    setTimeout(() => {
                        router.push("/"); // Redirect to home page after 5 seconds
                    }, 5_000);
                }
            }
            catch (err) {
                console.error("Error fetching account details:", err);
            }
        }

        if (session) {
            fetchAccountDetails();
        }

    }, [session]);
    // Align all items to the vertical and horizontal center of the screen
    const handleLinkDiscord = useCallback(() => {
        linkSocial("discord");
    }, []);

    return (
        // align all items to the true center of the screen
        <Box
            {...props}
        >
            {((!session) && (!account.discordId)) && (
                <Button variant="outlined" onClick={signIn} size="medium">
                    Sign In with Roblox
                </Button>
            )
            }

            {isPending && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}

            {session && !account.discordId && (
                <Button variant="outlined" onClick={handleLinkDiscord} size="medium">
                    Link Discord
                </Button>

            )}

            {session && account.discordId && account.robloxId && (
                <Box>
                    <p> You have successfully authenticated. </p>
                    <p> You will be redirected to the dashboard in 5 seconds... </p>
                </Box>
            )}

        </Box>



    );
}