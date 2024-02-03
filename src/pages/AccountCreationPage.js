import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import AccountCreationForm from "../components/AccountCreationForm";

import { FormControl } from '@mui/material';

const AccountCreationPage = ({

}) => {
    function search(formData) {
        const query = formData.get("query");
        alert(`You searched for '${query}'`);
      }

    return <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
    >
        <Grid item xs={3}>
            <AccountCreationForm />
        </Grid>
    </Grid>
    
    return <Box>
        <AccountCreationForm />
    </Box>
}

export default AccountCreationPage;