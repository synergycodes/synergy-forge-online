import { createTheme } from '@mui/material'

export const theme = createTheme({
    palette: {
        text: {
            primary: '#000000',
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained',
            },
            styleOverrides: {
                root: `
                    margin: 0 8px;
                `,
                containedPrimary: `
                    background-color: #F4F4F4;
                    color: #000000;

                    &:hover {
                      background-color: #E4E4E4;
                    }
                `,
            },
        },
    },
})
