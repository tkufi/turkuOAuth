"use client";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

export default function MuiThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#64B5F6',
            },
            secondary: {
                main: '#81D4FA',
            },
            text: {
                primary: '#E0E0E0',
                secondary: '#BBBBBB',
            },
            background: {
                default: '#0a1929',
                paper: '#161c24',
                // paper: '#ffffff',
            },
        },
        typography: {
            fontFamily: 'Roboto, Arial, sans-serif',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}