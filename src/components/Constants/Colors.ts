import { createTheme } from "@mui/material";

export const darkGreen = '#517629';
export const white = '#FFFFFF';
export const black = '#000000';

export const theme = createTheme({
    palette: {
        background: {
            default: darkGreen,
            paper: white,
        },
        getContrastText: ((background) => background === 'default' ? white : darkGreen),
        text: {
            primary: black,
            secondary: white,
        }
    },
});