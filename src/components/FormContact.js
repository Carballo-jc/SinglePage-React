import React from "react";
import {
  Container,
  FormGroup,
  Grid,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      backgroundColor: "white",
      margin: theme.spacing(2),
      boxShadow: '2px 2px 6px #0864B133',
    },
    
    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiFormGroup-root": {
      width: "100%",
    },
    "& input": {
      color: "#676767",
      height: 80,
      width: "auto",
      fontSize: 30,
    },
  },
  span: {
    color: "#0864B1",
    fontSize: 30,
    fontWeight: "bold",
    marginRight: 15,
  },
  form__send: {
    margin: 60,
    marginLeft: "15%",
  },
  btn__send: {
    backgroundColor: "#0864B1",
    border: "none",
    boxShadow: "3px 4px 8px #0016534D",
    width: 300,
    height: 100,
    color: "#ffff",
    fontSize: 30,
    fontWeight: "bold",
    cursor: "pointer",
  },
  text__area: {
    outline: 0,
    fontSize: 20,
    border:'none',
    boxShadow: '2px 2px 6px #0864B133',

  },
}));
const FormContact = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <form className={classes.root}>
        <Grid container>
        <Grid item md={6} xs={12}>
        <FormGroup>
            <label>First Name</label>
            <TextField />
          </FormGroup>
        </Grid>
        <Grid item md={6} xs={12}>
        <FormGroup>
            <label>Last Name</label>
            <TextField />
          </FormGroup>

        </Grid>
          <FormGroup>
            <label > Subject</label>
            <TextField />
          </FormGroup>
          <FormGroup>
            <label >Message</label>
         
            <TextareaAutosize
              className={classes.text__area}
              aria-label="minimum height"
              rowsMin={10}
            />
          </FormGroup>
        </Grid>
      </form>

      <div className={classes.form__send}>
        <span className={classes.span}>Empty Fills</span>
        <button className={classes.btn__send}>Send Message</button>
      </div>
    </Container>
  );
};

export default FormContact;
