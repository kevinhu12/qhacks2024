import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Button } from "@mui/material";
import { getTenant } from "../firebase";

const MatchCards = ({
  cardInfo
}) => {

  // Expands Controls
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const backgroundImageUrl = "/utils/maheeka.jpg";
  const address = `${cardInfo.address}`;
  const location = `${cardInfo.location}`;
  const bio = `${cardInfo.bio}`;
  const price = `${cardInfo.price}`;

  // Random Colour
  const getRandomDarkColor = () => {
    const randomHex = Math.floor(Math.random() * 16777215).toString(16); // Generate a random hex color
    return `#${randomHex}`;
  };
  const darkTextColor = getRandomDarkColor();

  return (
    <Box
      sx={{
        display: "flex"
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          height: 400,
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
        }}
      >
        <CardHeader
          sx={{ backgroundColor: "lightblue" }}
          avatar={
            <Avatar sx={{ bgcolor: darkTextColor }} aria-label="recipe">
              {'H'}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardMedia
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50%",
            width: "100%",
            border: "none",
          }}
          component="img"
          height="flex"
        />
        <CardContent sx={{ backgroundColor: "lightblue" }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <b>Address: </b>
            {address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Location: </b>
            {location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Price: </b>{price} CAD
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default MatchCards;