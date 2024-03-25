import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import DesignedPalette from './DesignPalette';
const SelectBtn = styled(ToggleButton)(({ theme }) => ({

    border: '1px solid',
    color: theme.palette.btn.main,
    borderColor: theme.palette.btn.border + "!important",
    borderRadius: "8px !important",
    textTransform: 'none',
    fontWeight: 'normal',

    '&.Mui-selected': {
        borderColor: theme.palette.btn.selected + "!important",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.btn.selected,


    },
    '&:active': {


        borderColor: theme.palette.btn.selected + "!important",

        color: theme.palette.btn.selected,
    },
    '&:focus': {
        borderColor: theme.palette.btn.selected,
        color: theme.palette.btn.selected + "!important",
    },


}));
export default SelectBtn