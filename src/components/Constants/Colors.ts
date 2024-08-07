import { createTheme } from "@mui/material";

const darkGreen = '#517629';
const white = '#FFFFFF';

export const theme = createTheme({
    palette: {
        background: {
            default: darkGreen,
            paper: white,
        },
        getContrastText: ((background) => background === 'default' ? white : darkGreen),
    },
});