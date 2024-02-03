import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';
import Page from '../components/Page';

const Landing = ({
    user,
    theme
}) => {
    const [text, setText] = useState("");

    const [x, setX] = useState(1);

    useEffect(() => {
    }, []);

    return (
        <Page>
            <Typography>test</Typography>
        </Page>
    )
}

export default Landing;
