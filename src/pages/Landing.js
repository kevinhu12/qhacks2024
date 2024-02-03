import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';
import Page from '../components/Page';
import TinderCards from '../components/TinderCards';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import CenterBox from '../components/CenterBox';
import { getTenant } from '../firebase.js';

const Landing = ({
    user,
    theme
}) => {
    const [viewingMatches, setViewingMatches] = useState(true);
    const toggleViewing = () => {
        setViewingMatches(!viewingMatches)
    }
    const viewMatches = () => {

    }

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

    const [cardInfo, setCardInfo] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const tenantData = await getTenant();
            setCardInfo(tenantData);
          } catch (error) {
            console.error('Error getting tenant data:', error);
          }
        };
    
        fetchData(); // Call the fetchData function when the component mounts
      }, []);

    return (
        <Page>
            <Grid
                container
                spacing={2}
                padding='1rem'
                sx={{ minHeight: '100vh' }}
            >
                <Grid item xs={1} />
                <Grid item xs={10}>
                    <CenterBox>
                        <Typography paddingBottom='7rem'>
                            {`Hello ${user.firstName} ${user.lastName}!`}
                        </Typography>
                    </CenterBox>
                </Grid>
                <Grid item xs={1}>
                    <Button
                        startIcon={<SettingsIcon />}
                    />
                </Grid>

                {/* Toggle view mode */}
                <Grid item xs={6}>
                    <CenterBox>
                        <Button
                            onClick={() => toggleViewing()}
                        >
                            Change viewing mode
                        </Button>
                    </CenterBox>
                </Grid>

                {/* Add postings or view matches */}
                <Grid item xs={6}>
                    <CenterBox>
                        {viewingMatches ? (
                            <Button
                                onClick={() => viewMatches()}
                            >
                                View my matches
                            </Button>
                        ) : (
                            <Button
                                startIcon={<AddIcon />}
                                onClick={() => {}}
                            >
                                Add Posting
                            </Button>
                        )}
                        
                    </CenterBox>
                </Grid>

                {/* Available postings or the user's postings */}
                <Grid item xs={12}>
                    <CenterBox>
                        {(viewingMatches && cardInfo) ? (
                            <TinderCards cardInfo={cardInfo} />
                        ) : cardInfo ? (
                            <TinderCards cardInfo={cardInfo} />
                        ) : <></> } 
                    </CenterBox>
                </Grid>

            </Grid>
        </Page>
    )
}

export default Landing;