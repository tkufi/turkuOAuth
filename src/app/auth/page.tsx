"use client";
import { signIn, User, linkSocial, authClient } from "@/lib/client";
import { Box, Button } from "@mui/material";
import { Avatar } from "@mui/material"
import { useEffect, useState } from 'react';

import { useCallback } from 'react';

export default function Home() {
  const [account, setAccount] = useState({
    robloxId: "",
    discordId: "",
    username: "",
    imageUrl: "",
  });

  const { sessionData } = User();
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
    <Box alignItems={"center"} justifyContent="center" display="flex" flexDirection="column" sx={{ height: "100vh" }}>
      {!session && (
        <Button onClick={signIn} >
          Sign In with Roblox
        </Button>
      )
      }

      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {session && (
        <Box>
          <h1>Welcome, {session.user.name}!</h1>
          <Avatar
            src={account.imageUrl}
            alt="User Avatar"
          // width={100}
          // height={100}
          />
          <p>Username: {account.username}</p>
          <p>Roblox ID: {account.robloxId}</p>

          <p>Discord ID: {account.discordId}</p>

        </Box>
      )}

      {session && !account.discordId && (

        <Button onClick={handleLinkDiscord} >
          Link Discord
        </Button>

      )}

    </Box>



  );
}
