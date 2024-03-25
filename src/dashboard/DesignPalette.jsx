import { amber, deepOrange, grey } from '@mui/material/colors';
const DesignedPalette = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                custom: {

                    main: grey[900],
                },
                navbar: {
                    main: '#ffffff',
                },

                text: {
                    primary: grey[900],
                    secondary: grey[800],
                },
                menu: {
                    main: '#555555',
                    dark: '#333333'
                },
                btn: {
                    main: '#2B2F33',
                    border: '#DAE1F5',
                    selected: '#F01B23'
                }
            }
            : {
                // palette values for dark mode
                custom: {

                    main: '#ffffff',
                },
                navbar: {
                    main: "#121212",
                },

                text: {
                    primary: '#fff',
                    secondary: grey[500],
                },
                menu: {
                    main: grey[300],
                    dark: grey[50]
                },
                btn: {
                    main: '#ffffff',
                    border: '#DAE1F5',
                    selected: '#F01B23'
                }
            }),
    },
});
export default DesignedPalette;