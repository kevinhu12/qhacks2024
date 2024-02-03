import Container from '@mui/material/Container';
import { styled } from '@mui/system';

const Page = styled(Container)(({

}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', 
    height: '100%', 
    backgroundColor: 'blue' 
}));

export default Page;