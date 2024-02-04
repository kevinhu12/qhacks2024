import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';
import Page from '../components/Page';
import TinderCards from '../components/TinderCards';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import CenterBox from '../components/CenterBox';

const Matches = ({
    setPage,
    theme
}) => {
    const [cards, setCards] = useState([]);
    const goBack = () => {
        setPage('landing');
    }

    useEffect(() => {
    }, []);

    return (
        <Page>
            <Grid
                container
                spacing={2}
                padding='1rem'
                sx={{ minHeight: '100vh' }}
            >
                <Grid item xs={12} display='flex' justifyContent='left'>
                    <Button
                        onClick={() => goBack()}
                    >
                        Back
                    </Button>
                </Grid>

                {/* Toggle view mode */}
                {cards.map((card) => (
                    <Grid item xs={12}>

                    </Grid>
                ))}

            </Grid>
        </Page>
    )
}

export default Matches;
