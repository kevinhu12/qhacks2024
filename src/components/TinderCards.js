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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const TinderCards = ({
  cardInfo,
  docId,
  onSwipeRight,
  type
}) => {

  // Expands Controls
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Background Image and Details
  const backgroundImageUrl = ["/utils/maheeka.jpg", "/utils/kevin.jpg"];
  const name = `${cardInfo.firstName} ${cardInfo.lastName}`;
  const profession = `${cardInfo.profession}`;
  let initals = `${cardInfo.firstName[0]}${cardInfo.lastName[0]}`;
  initals.toUpperCase();

  // Random Colour
  const getRandomDarkColor = () => {
    const randomHex = Math.floor(Math.random() * 16777215).toString(16); // Generate a random hex color
    return `#${randomHex}`;
  };
  const darkTextColor = getRandomDarkColor();

  // Handle Right Swipe
  const handleRightSwipe = () => {
    // Trigger the callback with the updated documentId
    onSwipeRight(docId, "tenants");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        sx={{ height: 550, width: 75 }}
        onClick={handleRightSwipe}
        variant="contained"
      >
        <KeyboardDoubleArrowLeftIcon />
      </Button>
      <Card
        sx={{
          maxWidth: 400,
          height: 550,
          backgroundImage: `url(${backgroundImageUrl[docId - 1]})`,
          backgroundSize: "cover",
        }}
      >
        <CardHeader
          sx={{ backgroundColor: "lightblue" }}
          avatar={
            <Avatar sx={{ bgcolor: darkTextColor }} aria-label="recipe">
              {initals}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
          subheader={profession}
        />
        <CardMedia
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60%",
            width: "100%",
            border: "none",
          }}
          component="img"
          height="flex"
        />
        <CardContent sx={{ backgroundColor: "lightblue", marginTop: 'auto' }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <b>About Me: </b>
            {cardInfo.bio}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Rating: </b>
            {cardInfo.rating}/10
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Price Preference: </b>${cardInfo.ppl} - ${cardInfo.pph} CAD
          </Typography>
        </CardContent>
      </Card>
      <Button
        sx={{ height: 550, width: 75 }}
        onClick={handleRightSwipe}
        variant="contained"
      >
        <KeyboardDoubleArrowRightIcon />
      </Button>
    </Box>
  );
}

export default TinderCards;