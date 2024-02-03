import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const CenterBox = styled(Box)(({

}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}));

export default CenterBox;