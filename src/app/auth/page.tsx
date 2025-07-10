"use client";
import { signIn, User, linkSocial } from "@/lib/client";
import { Box, Button } from "@mui/material";
import { Avatar } from "@mui/material"
import { useState } from 'react';

export default function Home() {

  const [ account, setAccount ] = useState({
    robloxId: "",
    discordId: "",
    username: "",
    imageUrl: "",
  });

  const { sessionData, accounts } = User();
  const { data: session, isPending, error } = sessionData;

  accounts.then((data) => {
    const robloxInfo = data.data?.find(account => account.provider === "roblox");
    const discordInfo = data.data?.find(account => account.provider === "discord");

    var accountDetails = {
      robloxId: robloxInfo?.accountId || "",
      discordId: discordInfo?.accountId || "",
      username: session?.user.email || "",
      imageUrl: session?.user.image?.toString() || "",
    };

    setAccount(accountDetails);
  }).catch((err) => {
    console.error("Error fetching accounts:", err);
  });

  return (
    // align all items to the true center of the screen
    <Box alignItems={"center"} justifyContent="center" display="flex" flexDirection="column" style={{ height: "100vh" }}>
      <Button onClick={signIn} >
        Sign In with Roblox
      </Button>

      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {session && (
        <Box>
          <h1>Welcome, {session.user.name}!</h1>
          <Avatar
            src={session.user.image?.toString() || ""}
            alt="User Avatar"
          // width={100}
          // height={100}
          />
          <p>Username: {session.user.name}</p>
          <p>Roblox ID: {session.user.robloxId}</p>

          <p>Discord ID: {account.discordId}</p>

        </Box>
      )}

      <Button onClick={() => { linkSocial("discord") }} >
        Link Discord
      </Button>

    </Box>



  );
}
