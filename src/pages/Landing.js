import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import Page from "../components/Page";
import TinderCards from "../components/TinderCards";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import CenterBox from "../components/CenterBox";
import { getTenant } from "../firebase.js";
import CreateTenantListingForm from "../components/CreateTenantListingForm.js";

const Landing = ({ user, setPage }) => {
  // Doc Id
  const [docId, setDocId] = useState(0);

  // Viewing Matches
  const [viewingMatches, setViewingMatches] = useState(true);
  const toggleViewing = () => {
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

        async function GetMatches() {
            axios.get(`https://catfact.ninja/fact`)
            .then(res => {
                setMatches(res.data);
            })
        } 
        GetMatches();

        const tenantData = await getTenant(docId);
        setCardInfo(tenantData);

        const incrementedDocId = docId + 1;
        setDocId(incrementedDocId);
      } catch (error) {
        console.error("Error getting tenant data:", error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  // Callback function to be passed to TinderCard
  const handleSwipeCallback = async (newDocumentId) => {
    const tenantData = await getTenant(newDocumentId);
    setCardInfo(tenantData);
    const incrementedDocId = docId + 1;
    setDocId(incrementedDocId);
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
              <Button variant="outlined" onClick={() => viewMatches()}>
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
            {viewingMatches && cardInfo ? (
              <>
                <Typography color="primary" padding="0.75rem">
                  Recommended Matches
                </Typography>
                <TinderCards
                  cardInfo={cardInfo}
                  docId={docId}
                  onSwipeRight={(newDocId) => handleSwipeCallback(newDocId)}
                />
              </>
            ) : cardInfo ? (
              <>
                <Typography color="primary" padding="0.75rem">
                  Your Active Postings
                </Typography>
                <TinderCards
                  cardInfo={cardInfo}
                  docId={docId}
                  onSwipeRight={(newDocId) => handleSwipeCallback(newDocId)}
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
