import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AccountService from '../services/AccountService';
import TinderCard from "../components/TinderCards.js";

const Home = ({
    theme
}) => {
    const [text, setText] = useState("");

    const accountService = AccountService();
    const [x, setX] = useState(1);

    useEffect(() => {
        async function TestCall() {
            axios.get(`https://catfact.ninja/fact`)
            .then(res => {
                setText(res.data);
            })
        } 
        TestCall();
        setX(accountService.getAccount(x));
    }, []);

    const [cardInfo, setCardInfo] = useState(null);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const tenantData = await getTenant();
    //       setCardInfo(tenantData);
    //     } catch (error) {
    //       console.error('Error getting tenant data:', error);
    //     }
    //   };
  
    //   fetchData(); // Call the fetchData function when the component mounts
    // }, []);

    return (
        <Box>
            <Typography>
                {text?.fact}
            </Typography>
            <Typography>
                {x}
            </Typography>
            <Grid container>
                <Grid xs={8}>
                    another test
                </Grid>
                <Grid xs={4}>
                    Test
                </Grid>
            </Grid>
            {/* <Button
                onClick={() => {
                    // addLandlord();
                    getTenant();
                }}
            >
                Click me
            </Button> */}
            {cardInfo && <TinderCard cardInfo={cardInfo} />}
        </Box>
    )
}

export default Home;
