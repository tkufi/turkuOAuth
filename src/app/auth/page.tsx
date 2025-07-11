"use client";

import AuthButtons from "@/components/authButtons";
import { User } from "@/lib/client";
import { Avatar, Box, Card, CardContent, CardHeader, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function authPage() {
  const { sessionData } = User();
  const [userSession, setUserSession] = useState({});

  useEffect(() => {
    if (sessionData) {
      setUserSession(sessionData);
    }
  }, [sessionData]);

  return (
    <div>
      <CardContent>

        {/* Display user information or prompt to link accounts */}
        {
          (!sessionData.data?.user.robloxId) && (
            <>
              <Box
                component={"img"}
                src="/ico.png"
                height={64}
                display={"inline"}
              >
              </Box>

              <Stack spacing={1} sx={{ my: 5 }}>
                <Typography variant="h5" component="div" align="center">
                  Welcome to Tkurbx Auth
                </Typography>

                <Typography variant="body2" color="text.secondary" align="center">
                  Please link your social accounts to continue.
                </Typography>
              </Stack>
            </>
          ) || (
            <>
              <CardHeader
                sx={{ textAlign: "left" }}
                avatar={
                  <Avatar
                    src={sessionData.data?.user.image?.toString() || ""}
                    alt="User Avatar"
                  />
                }
                title={sessionData.data?.user.name}
                subheader={`Roblox ID: ${sessionData.data?.user.robloxId || "Not linked"}`} />
            </>
          )
        }



        <AuthButtons
          gap={2}
          alignItems="center"
          justifyContent="center"
          display="flex"
          flexDirection="column"
          sx={{ height: "100%" }}
          sessionData={userSession}
        />
      </CardContent>
    </div>
  );
}
