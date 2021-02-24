import { Container, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Testimonials = () => {
  const classes = useStyles();
  return (
    <div className={classes.testimonial}>
     <Container>
     <div className={classes.testimonial__content}>
        <h1>Testimonials</h1>
        <Grid container>
        <div className={classes.testimonial__text}>
            <article>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy
              <span className={classes.simbol}>&#x201D; </span>
              <br />
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et
              ea rebum.
              <br />
              <span className={classes.simbol}>&#x201C;</span>
              <div className={classes.testimoniales__text__final}>
                <span>-Lorem ipsum dolor</span>
                <h3>Labore et dolore</h3>
              </div>
            </article>
          </div>
        </Grid>
      </div>
     </Container>
    </div>
  );
};

export default Testimonials;
