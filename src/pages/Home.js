import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
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
        </Box>
    )
}

export default Home;
