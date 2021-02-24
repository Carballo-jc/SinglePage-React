import { Container, Grid } from "@material-ui/core";
import React from "react";
import ListItem from "../../components/ListItem";
import useStyles from "./styles";

const lisItems = [
  { value: "+20", leyend: "Lorem ipsum" },
  { value: "7", leyend: "Lorem ipsum" },
  { value: "+2010", leyend: "Lorem ipsum" },
  { value: "115", leyend: "Lorem ipsum" },
];

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <Container>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.about__content}>
            <h2 className={classes.about__title}>About Us</h2>
            <p className={classes.about__text}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est
            </p>
            <ul className={classes.items}>
              <Grid container>
                {lisItems.map((item, i) => {
                  return <ListItem item={item} key={i} />;
                })}
              </Grid>
            </ul>
          </div>
        </Grid>
      </Grid>
      </Container>
    </div>
  );
};

export default About;
