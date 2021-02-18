import { Grid } from "@material-ui/core";
import React from "react";
import useStyles from "../pages/feature/styles";

const Feature = ({ feature }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={4}>
      <div className={classes.feature__item}>
        <img
          src={feature.image}
          alt={feature.i}
          className={classes.image_currency}
        />
        <p>{feature.descriptio}</p>
      </div>
    </Grid>
  );
};

export default Feature;
