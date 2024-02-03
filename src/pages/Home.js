import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { addLandlord } from '../firebase.js';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Home = ({
    theme
}) => {
    const [text, setText] = useState("");

    useEffect(() => {
        async function TestCall() {
            axios.get(`https://catfact.ninja/fact`)
            .then(res => {
                setText(res.data);
            })
        } 
        TestCall();
    }, []);

    return (
        <Box>
            <Typography>
                {text?.fact}
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
