import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';
import Page from '../components/Page';
import TinderCards from '../components/TinderCards';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import CenterBox from '../components/CenterBox';
import MatchCards from '../components/MatchCards';

const Matches = ({
    setPage,
    theme
}) => {
    // const [isLoading, setIsLoading] = useState(true);
    const [cards, setCards] = useState(['']);
    const goBack = () => {
        setPage('landing');
    }

    // useEffect(() => {
    //     setCards([{
    //         address: "321 College st",
    //         bio: "Embrace the allure of this quaint and charming small house. Offering a perfect blend of simplicity and style, this home is designed for those who appreciate comfort in a compact and inviting space.",
    //         location: "Toronto, ON",
    //         price: 999,
    //         rating: 6.2
    //     }])
    //     setIsLoading(false);
    // }, []);

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
                        <MatchCards 
                            cardInfo={{
                                address: "321 College st",
                                bio: "Embrace the allure of this quaint and charming small house. Offering a perfect blend of simplicity and style, this home is designed for those who appreciate comfort in a compact and inviting space.",
                                location: "Toronto, ON",
                                price: 999,
                                rating: 6.2
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Page>
    )
}

export default Matches;
