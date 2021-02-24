import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import TreeView from "@material-ui/lab/TreeView";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    // marginRight: 100,
  },
  card: {
    height: 600,
    marginTop: 100,
    display: "flex",
    justifyContent: "space-between",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  card__text: {
    color: "#676767",
    fontSize: 20,
    maxWidth: 385,
    height: 235,
    
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  read: {
    display: "flex",
    color: "#0864B1",
    width: 100,
    height: 40,
    marginLeft: "auto",
    "& label": {
      fontSize: 20,
      fontWeight: "bold",
    },
  },
}));

const CardDetail = ({ detail }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4}>
      <Card className={classes.root} key={detail.id}>
        <CardMedia className={classes.media} image={detail.image} />
        <CardContent className={classes.card__text}>
          <p>{detail.description}</p>
          <TreeView className={classes.read}>
            <TreeItem nodeId="4" label="Read" />
            <ChevronRightIcon />
          </TreeView>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default CardDetail;
