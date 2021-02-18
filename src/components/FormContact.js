import React from "react";
import {
  Container,
  FormControl,
  Grid,
  TextareaAutosize,
} from "@material-ui/core";
import useStyles from "../pages/contacts/styles";

const FormContact = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Grid container>
        <FormControl className={classes.input__first}>
          <label htmlFor="">First Name</label>
          <input id="name" />
        </FormControl>
        <FormControl>
          <label htmlFor="">Last Name</label>
          <input id="last" />
        </FormControl>
      </Grid>
      <FormControl fullWidth={true}>
        <label htmlFor="">Subject</label>
        <input id="subject" />
      </FormControl>
      <FormControl fullWidth={true}>
        <label htmlFor="">Message</label>
        <TextareaAutosize
          className={classes.text__area}
          aria-label="minimum height"
          rowsMin={8}
        />
      </FormControl>
      <div className={classes.form__send}>
        <span className={classes.span}>Empty Fills</span>
        <button className={classes.btn__send}>Send Message</button>
      </div>
    </Container>
  );
};

export default FormContact;
