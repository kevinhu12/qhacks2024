import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Home = ({
    theme
}) => {
    let x = 1 + 3;

    return (
        <Box>
            <Typography>
                Test{x}
            </Typography>
            <Typography>
                test 2
            </Typography>
            <Grid container>
                <Grid xs={8}>
                    another test
                </Grid>
                <Grid xs={4}>
                    Test
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home;
