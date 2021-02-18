import { Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
const SectionJoin = () => {
  const classes = useStyles();
  return (
    <div className={classes.join}>
      <div className={classes.join__content}>
        <Grid container justify="center">
          <Grid item xs={12} md={6}>
            <div className={classes.join__title}>
              <h4>
                Join our <br /> newsletter to stay updated
              </h4>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.join__search}>
              <input type="text" name="" id="" />
              <input
                type="button"
                className={classes.input__search}
                value="Join Newsletter"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SectionJoin;
