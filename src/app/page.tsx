"use client";

import AuthButtons from "@/components/authButtons";
import FloatingActionBox from "@/components/FloatingActionBox";
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
    <>
    <Card sx={{ py: 5, px: 3 }}>
      <div>
        <CardContent>

          {/* Display user information or prompt to link accounts */}
          {
            (!sessionData.data?.user.robloxId) && (
              <>
                <Box
                  component={"img"}
                  src="/ico.png"
                  alt="logo"
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
    </Card>
    <FloatingActionBox>
      <Box sx={{ textAlign: "right", color: "#E0E0E0" }}>
        <Typography variant="body2">
          By using Tkurbx Auth, you agree to our <a href="/legal/privacy" style={{ color: "#81D4FA" }}>Privacy Policy</a> and <a href="/legal/terms" style={{ color: "#81D4FA" }}>Terms of Service</a>.
        </Typography>
        <Typography variant="body2">
          © {new Date().getFullYear()} Tkurbx. All rights reserved.
        </Typography>
      </Box>
    </FloatingActionBox>
    </>
  );
}
