import { Box } from "@mui/material";

export default function FloatingActionBox({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Box
            sx={{
                position: "fixed",
                bottom: 24,
                right: 24,
                zIndex: 1300,
                display: "flex",
                flexDirection: "row",
                gap: 1,
            }}
        >
            {children}
        </Box>
    )
}