import { Container, FormGroup, Grid, TextField } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
const SectionJoin = () => {
  const classes = useStyles();
  return (
    <div className={classes.join}>
     <Container>
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
             <FormGroup>
                 <div className={classes.join__search}>
              <TextField />

                  <input
                    type="button"
                    className={classes.input__search}
                    value="Join Newsletter"
                  />
                </div>
             </FormGroup>
          </Grid>
        </Grid>
      </div>
     </Container>
    </div>
  );
};

export default SectionJoin;
