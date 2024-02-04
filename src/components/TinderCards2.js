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

const TinderCards2 = ({
  cardInfo,
  docId,
  onSwipeRight,
}) => {

  // Expands Controls
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const backgroundImageUrl = ["/utils/house1.jpeg", "/utils/house2.jpeg","/utils/house3.jpeg"];
  const address = `${cardInfo.address}`;
  const location = `${cardInfo.location}`;
  const bio = `${cardInfo.bio}`;
  const price = `${cardInfo.price}`;
  const rating = `${cardInfo.rating}`;

  // Initals
  const generateRandomLetter = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  };
  const initals = generateRandomLetter() + generateRandomLetter();

  // Random Colour
  const getRandomDarkColor = () => {
    const randomHex = Math.floor(Math.random() * 16777215).toString(16); // Generate a random hex color
    return `#${randomHex}`;
  };
  const darkTextColor = getRandomDarkColor();

  // Handle Right Swipe
  const handleRightSwipe = () => {
    // Trigger the callback with the updated documentId
    onSwipeRight(docId, "houses");
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
        sx={{ height: 500, width: 75 }}
        onClick={handleRightSwipe}
        variant="contained"
      >
        <KeyboardDoubleArrowLeftIcon />
      </Button>
      <Card
        sx={{
          flexDirection:'column',
          maxWidth: 400,
          height: "100%",
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
          title={address}
          subheader={location}
        />
        <CardMedia
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 300,
            width: "100%",
            border: "none",
          }}
          component="img"
          height="flex"
        />
                  <Box sx={{ flexGrow: 5 }}>
    {/* This div will take the remaining space */}
  </Box>
        <CardContent sx={{ backgroundColor: "lightblue" }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <b>Summary: </b>
            {bio}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Rating:  </b>
            {rating} / 10
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Price: </b>{price} CAD
          </Typography>
        </CardContent>
      </Card>
      <Button
        sx={{ height: 500, width: 75 }}
        onClick={handleRightSwipe}
        variant="contained"
      >
        <KeyboardDoubleArrowRightIcon />
      </Button>
    </Box>
  );
}

export default TinderCards2;




