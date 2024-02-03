import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';
import Page from '../components/Page';

const Landing = ({
    user,
    theme
}) => {
    const [text, setText] = useState("");

    const [x, setX] = useState(1);

    user = {
        firstName: "Kev",
        age: 15,
        job: "dying",
        gender: "all",
        username: "idk",
        lastName: "in",
        email: "ayo.com",
        accountType: "tenant"
    }

    useEffect(() => {
    }, []);

    return (
        <Page>
            <Typography>
            {`Hello ${user.firstName} ${user.lastName}!`}
            </Typography>
            <Button
                        onClick={() => { }}
                    >
                        Browse postings
                    </Button>
                    <Button
                        onClick={() => { }}
                    >
                        See messages
                    </Button>
            {/* <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    {`Hello ${user.firstName} ${user.lastName}!`}
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        onClick={() => { }}
                    >
                        Browse postings
                    </Button>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        onClick={() => { }}
                    >
                        See messages
                    </Button>
                </Grid>
            </Grid> */}
        </Page>
    )
}

export default Landing;
