import * as React from "react";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { addLandlord } from '../firebase.js';

const Home = ({
    theme
}) => {
    let x = 7 + 3;

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
            <Button
                onClick={() => {
                    addLandlord();
                }}
            >
                Click me
            </Button>
        </Box>
    )
}

export default Home;
