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
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Button, Grid } from "@mui/material";

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

export default function TinderCard(info) {
  const {cardInfo} = info;
  // Expands Controls
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Background Image and Details
  const backgroundImageUrl = "/utils/maheeka.jpg";
  const name = `${cardInfo.firstname} ${cardInfo.lastname}`
  const profession = `${cardInfo.profession}`

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Button sx={{ height: 800, width: 100 }} variant="contained">
        <KeyboardDoubleArrowLeftIcon />
      </Button>
      <Card
        sx={{
          maxWidth: 600,
          height: 800,
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
        }}
      >
        <CardHeader
          sx={{ backgroundColor: "lightblue" }}
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              MN
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
            height: "70%",
            width: "100%",
            border: "none",
          }}
          component="img"
          height="flex"
        />
        <CardActions sx={{ backgroundColor: "white" }} disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <CardContent sx={{ backgroundColor: "lightblue" }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <b>About Me: </b>{cardInfo.bio}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Rating: </b>{cardInfo.rating}/10
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Price Preference: </b>${cardInfo.ppl} - ${cardInfo.pph} CAD
          </Typography>
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that
              don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Button sx={{ height: 800, width: 100 }} variant="contained">
        <KeyboardDoubleArrowRightIcon />
      </Button>
    </Box>
  );
}
