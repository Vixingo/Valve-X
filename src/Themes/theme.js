import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#186FE7",
        },
        background: {
            default: "#000",
        },
    },

    typography: {
        fontFamily: "Poppins",
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1024,
        },
    },
});
