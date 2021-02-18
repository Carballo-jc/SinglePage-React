import { Grid } from "@material-ui/core";
import React from "react";
import FormContact from "../../components/FormContact";
import useStyles from "./styles";

const Contact = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.contact}>
      <div className={classes.contact__content}>
        <h1>Contact Us</h1>
        <FormContact />
      </div>
    </Grid>
  );
};

export default Contact;
