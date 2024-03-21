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
            }),
    },
});
export default DesignedPalette;