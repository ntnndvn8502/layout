import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';
const FullWCard = styled((props) => <Card  {...props} />)(
    ({ theme }) => ({
        width: '100%',
        padding: '16px',
        marginBlock: '8px',
        borderRadius: '8px',

    }),
);
export default FullWCard