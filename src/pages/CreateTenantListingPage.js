import { Grid } from "@mui/material";
import CreateTenantListingForm from "../components/CreateTenantListingForm";


const CreateTenantListingPage = ({

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
            <CreateTenantListingForm />
        </Grid>
    </Grid>
}

export default CreateTenantListingPage;