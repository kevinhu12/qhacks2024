import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import Page from "../components/Page";
import TinderCards from "../components/TinderCards";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import CenterBox from "../components/CenterBox";
import { getAsset } from "../firebase.js";
import CreateTenantListingForm from "../components/CreateTenantListingForm.js";
import axios from 'axios';
import TinderCards2 from '../components/TinderCards2.js';
import SearchIcon from '@mui/icons-material/Search';

const Landing = ({ user, setPage }) => {
  // Doc Id
  const [docId, setDocId] = useState(0);

  const [loading, setLoading] = useState(true);

  // Viewing Matches
  const [viewingMatches, setViewingMatches] = useState(true);
  const toggleViewing = () => {
    setLoading(true);
    setDocId(0);
    setViewingMatches(!viewingMatches);
  };
  const [viewingModal, setViewingModal] = useState(false);
  const viewMatches = () => {
    setPage("matches");
  };

  user = {
    firstName: "Kev",
    age: 15,
    job: "dying",
    gender: "all",
    username: "idk",
    lastName: "in",
    email: "ayo.com",
    accountType: "tenant",
  };

  const [cardInfo, setCardInfo] = useState(null);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        // async function GetMatches() {
        //   axios.get(`https://127.0.0.1:5000`).then(res => { setMatches(res.data) })
        //     // axios.post(
        //     //   `https://127.0.0.1:5000/match`, 
        //     //   {
        //     //     TenantListing: {
        //     //       rentPrice: 1000,
        //     //       squareFeet: 1000,
        //     //       smoker: false,
        //     //       pets: false,
        //     //       furnished: true
        //     //     },
        //     //     Landlords: [
        //     //       {
        //     //         rentPrice: 1001,
        //     //         squareFeet: 1001,
        //     //         smoker: false,
        //     //         pets: false,
        //     //         furnished: false
        //     //       },
        //     //       {
        //     //         rentPrice: 1002,
        //     //         squareFeet: 1002,
        //     //         smoker: false,
        //     //         pets: true,
        //     //         furnished: false
        //     //       }
        //     //     ]
        //     //   },
        //     //   {
        //     //     headers: {
        //     //       'Content-Type': 'application/json'
        //     //     }
        //     //   }
        //     // )
        //     // .then(res => {
        //     //     setMatches(res.data);
        //     // })
        // } 
        // GetMatches();

        const tenantData = viewingMatches ? await getAsset(docId, "houses") : await getAsset(docId, "tenants");
        setCardInfo(tenantData);

        const incrementedDocId = docId + 1;
        setDocId(incrementedDocId);

        setLoading(false);
      } catch (error) {
        console.error("Error getting tenant data:", error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, [viewingMatches]);

  // Callback function to be passed to TinderCard
  const handleSwipeCallback = async (newDocumentId, type) => {
    setLoading(true);
    const assetData = await getAsset(newDocumentId, type);
    setCardInfo(assetData);
    const incrementedDocId = docId + 1;
    setDocId(incrementedDocId);
    setLoading(false);
  };
  return (
    <Page>
      <Grid container spacing={2} padding="1rem">
        <Grid item xs={1} />
        <Grid item xs={10}>
          <CenterBox>
            <Typography variant="h2" color="primary" paddingBottom="1rem">
              {`Hello ${user.firstName} ${user.lastName}!`}
            </Typography>
          </CenterBox>
        </Grid>
        <Grid item xs={1}>
          <Button startIcon={<SettingsIcon />} />
        </Grid>

        {/* Toggle view mode */}
        <Grid
          item
          xs={6}
          display="flex"
          justifyContent="right"
          paddingRight="0.5rem"
        >
          <Button variant="outlined" onClick={() => toggleViewing()}>
            Change viewing mode
          </Button>
        </Grid>

        {/* Add postings or view matches */}
        <Grid
          item
          xs={6}
          display="flex"
          justifyContent="left"
          paddingLeft="0.5rem"
        >
          <CenterBox>
            {viewingMatches ? (
              <Button startIcon={<SearchIcon />} variant="outlined" onClick={() => viewMatches() }>
                View my matches
              </Button>
            ) : (
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={() => setViewingModal(true)}
              >
                Add Posting
              </Button>
            )}
          </CenterBox>
        </Grid>

        {/* Available postings or the user's postings */}
        <Grid item xs={12}>
          <CenterBox>
            {!loading && viewingMatches && cardInfo ? (
              <>
                <Typography color="primary" padding="0.75rem">
                  Recommended Matches
                </Typography>
                <TinderCards2
                  cardInfo={cardInfo}
                  docId={docId}
                  onSwipeRight={(newDocId, type) => handleSwipeCallback(newDocId, type)}
                />
              </>
            ) : !loading && cardInfo ? (
              <>
                <Typography color="primary" padding="0.75rem">
                  Your Active Postings
                </Typography>
                <TinderCards
                  cardInfo={cardInfo}
                  docId={docId}
                  onSwipeRight={(newDocId, type) => handleSwipeCallback(newDocId, type)}
                />
              </>
            ) : (
              <></>
            )}
          </CenterBox>
        </Grid>
      </Grid>

      {viewingModal && (
        <CreateTenantListingForm handleClose={() => setViewingModal(false)} />
      )}
    </Page>
  );
};

export default Landing;
