import MuiThemeProvider from "@/theme";
import { Card } from "@mui/material";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Tkurbx Auth",
    description: "Tkurbx Auth is a simple authentication system for Tkurbx.",

};



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                style={{
                    color: "#ffffff",
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    position: "relative",
                }}
            >
                <MuiThemeProvider>
                    <Card sx={{ py: 5, px: 3 }}>
                        {children}
                    </Card>
                </MuiThemeProvider>
            </body>
        </html >
    );
}
