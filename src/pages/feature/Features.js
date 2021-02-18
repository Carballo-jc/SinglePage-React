import React from "react";
import foco from "../../assets/Grupo 189.svg";
import barras from "../../assets/Grupo 190.svg";
import currency from "../../assets/currency1.png";
import useStyles from "./styles";
import Feature from "../../components/Feature";
import { Grid } from "@material-ui/core";

const features = [
  {
    image: foco,
    descriptio:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor",
  },
  {
    image: barras,
    descriptio:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor",
  },
  {
    image: currency,
    descriptio:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor",
  },
];

const Features = () => {
  const classes = useStyles();
  return (
    <div className={classes.feature}>
      <div className={classes.feature__content}>
        <h2 className={classes.feature_title}>Features</h2>
        <div className={classes.feature__items}>
          <Grid container justify="center">
            {features.map((feature, i) => (
              <Feature key={i} feature={feature} />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Features;
