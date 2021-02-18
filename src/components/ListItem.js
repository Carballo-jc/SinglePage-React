import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  lis__item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    listStyle: "none",
    "& p": {
      color: "#0864B1",
      fontSize: 100,
      fontWeight: "bold",
    },
    "& span": {
      fontSize: 40,
      color: "#676767",
    },
  },
}));
const ListItem = ({ item }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={3}>
      <li className={classes.lis__item}>
        <p>{item.value}</p>
        <span>{item.leyend}</span>
      </li>
    </Grid>
  );
};

export default ListItem;
