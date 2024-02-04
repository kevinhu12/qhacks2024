import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Modal from '@mui/material/Modal';

import { createTenantListing } from '../firebase.js'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

function priceRangeText(value) {
  return `$${value}`;
}

const CreateTenantListingForm = ({
  handleClose
}) => {
  const [open, setOpen] = React.useState(true);

  const [priceRange, setPriceRange] = React.useState([0, 50]);
  const [occupant, setOccupant] = React.useState(false);
  const [religion, setReligion] = React.useState(false);
  const [smoker, setSmoker] = React.useState(false);
  const [bedroom, setBedroom] = React.useState(false);
  const [bathroom, setBathroom] = React.useState(false);
  const [furnished, setFurnshed] = React.useState(false);

  // const [user, setUser] = React.useState({});
  // setUser({ name: "" })
  // setUser({ ..., email: ""})

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const tenantListing = {
      accountId: 'skXzvrN9fXUmVF2I4jWZ',
      priceLow: data.get('price-low'),
      priceHigh: data.get('price-high'),
      postalCode: data.get('postal-code'),
      radius: data.get('radius'),
      numBed: bedroom,
      numBath: bathroom,
      isFurnished: furnished,
      numOccupant: occupant,
      religion: religion,
      isSmoker: smoker,
      stayLength: data.get('stay-length'),
      bio: data.get('bio')
    }
    createTenantListing(tenantListing);
  };

  const handlePriceRange = (event, newValue) => {
    setPriceRange(newValue);
  };



  const handleOccupant = (event) => {
    setOccupant(event.target.value);
  };
  const handleReligion = (event) => {
    setReligion(event.target.value);
  };
  const handleSmoker = (event) => {
    setSmoker(event.target.value);
  };
  const handleBedroom = (event) => {
    setBedroom(event.target.value);
  };
  const handleBathroom = (event) => {
    setBathroom(event.target.value);
  };
  const handleFurnished = (event) => {
    setFurnshed(event.target.value);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          handleClose();
        }}
        aria-labelledby="tenant-create-listing-modal"
        aria-describedby="create-listing-as-tenant"
      >
        <Box sx={style}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* 
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              </Avatar>
               */}
              <Typography component="h1" variant="h5">
                Tenant Preferences
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Box sx={{ width: 500, padding: 2 }}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={2}>
                        <Typography gutterBottom>Price Range</Typography>
                      </Grid>
                      <Grid item xs={10}>
                        <Slider
                          color='secondary'
                          getAriaLabel={() => 'Price range'}
                          value={priceRange}
                          onChange={handlePriceRange}
                          valueLabelDisplay="auto"
                          getAriaValueText={priceRangeText}
                          min={0}
                          max={2000}
                        />
                      </Grid>
                    </Grid>
                  </Box>


                  <Grid item xs={12} sm={6}>


                    <Box>
                      <TextField
                        required
                        type="number"
                        id="price-low"
                        name="price-low"
                        value={priceRange[0]}
                      />

                      <TextField
                        required
                        type="number"
                        id="price high"
                        name="price-high"
                        value={priceRange[1]}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Box>
                      <TextField
                        required

                        id="location-postal-code"
                        label="Location (Postal Code)"
                        name="postal-code"
                        autoComplete="postal-code"
                      />

                      <TextField
                        required
                        type="number"
                        id="radius"
                        label="Range (km)"
                        name="radius"
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl sx={{ m: 1, minWidth: 240 }}>
                      <InputLabel id="bedroom-select-helper-label"># Bedrooms</InputLabel>
                      <Select
                        required
                        labelId="bedroom-label"
                        id="bedroom-label-required"
                        value={bedroom}
                        label="# Bedrooms"
                        onChange={handleBedroom}
                      >
                        <MenuItem value={'1'}>1</MenuItem>
                        <MenuItem value={'2'}>2</MenuItem>
                        <MenuItem value={'3'}>3</MenuItem>
                        <MenuItem value={'4'}>4</MenuItem>
                        <MenuItem value={'5'}>5</MenuItem>
                        <MenuItem value={'6+'}>6+</MenuItem>
                      </Select>
                      <FormHelperText></FormHelperText>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 240 }}>
                      <InputLabel id="bathroom-select-helper-label"># Bathrooms</InputLabel>
                      <Select
                        required
                        labelId="bathroom-label"
                        id="bathroom-label-required"
                        value={bathroom}
                        label="# Bathrooms"
                        onChange={handleBathroom}
                      >
                        <MenuItem value={'1'}>1</MenuItem>
                        <MenuItem value={'2'}>2</MenuItem>
                        <MenuItem value={'3'}>3</MenuItem>
                        <MenuItem value={'4'}>4</MenuItem>
                        <MenuItem value={'5'}>5</MenuItem>
                        <MenuItem value={'6+'}>6+</MenuItem>
                      </Select>
                      <FormHelperText></FormHelperText>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 240 }}>
                      <InputLabel id="furnished-select-helper-label">Furnished</InputLabel>
                      <Select
                        required
                        labelId="furnished-label"
                        id="furnished-label-required"
                        value={furnished}
                        label="Furnished"
                        onChange={handleFurnished}
                      >
                        <MenuItem value={'Yes'}>Yes</MenuItem>
                        <MenuItem value={'No'}>No</MenuItem>
                      </Select>
                      <FormHelperText></FormHelperText>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl sx={{ m: 1, minWidth: 240 }}>
                      <InputLabel id="occupancy-select-helper-label"># Occupants</InputLabel>
                      <Select
                        required
                        labelId="occupancy-label"
                        id="religion-label-required"
                        value={occupant}
                        label="# Occupants"
                        onChange={handleOccupant}
                      >
                        <MenuItem value={'1'}>1</MenuItem>
                        <MenuItem value={'2'}>2</MenuItem>
                        <MenuItem value={'3'}>3</MenuItem>
                        <MenuItem value={'4'}>4</MenuItem>
                        <MenuItem value={'5'}>5</MenuItem>
                        <MenuItem value={'6+'}>6+</MenuItem>
                      </Select>
                      <FormHelperText></FormHelperText>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 240 }}>
                      <InputLabel id="religion-select-helper-label">Religion</InputLabel>
                      <Select
                        required
                        labelId="religion-label"
                        id="religion-label-required"
                        value={religion}
                        label="I am a"
                        onChange={handleReligion}
                      >
                        <MenuItem value={'Religion1'}>Religion1</MenuItem>
                        <MenuItem value={'Religion2'}>Religion2</MenuItem>
                        <MenuItem value={'Religion3'}>Religion3</MenuItem>
                        <MenuItem value={'Religion4'}>Religion4</MenuItem>
                      </Select>
                      <FormHelperText></FormHelperText>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 240 }}>
                      <InputLabel id="smokes-select-helper-label">Smoker</InputLabel>
                      <Select
                        required
                        labelId="smoker-label"
                        id="smoker-label-required"
                        value={smoker}
                        label="I smoke"
                        onChange={handleSmoker}
                      >
                        <MenuItem value={'Yes'}>Yes</MenuItem>
                        <MenuItem value={'No'}>No</MenuItem>
                      </Select>
                      <FormHelperText></FormHelperText>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="stay-length"
                      label="Length of stay (months)"
                      type="number"
                      id="stay-length"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="bio"
                      label="Bio (max 200 words)"
                      name="bio"
                    />
                  </Grid>

                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Create Listing
                </Button>
                <Grid container justifyContent="flex-end">

                </Grid>
              </Box>
            </Box>
          </Container>
        </Box>
      </Modal>
    </>
  );
}

export default CreateTenantListingForm;