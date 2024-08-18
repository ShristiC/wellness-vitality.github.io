import { createTheme } from "@mui/material";

export const lightGreen = '#719B46';
export const darkGreen = '#517629';
export const offWhite = '#F8F2DD';
export const white = '#FFFFFF';
export const black = '#000000';
export const gray = '#B6B8B9';

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
        },
        divider: gray,
    },
});