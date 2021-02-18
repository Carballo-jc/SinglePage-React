import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  contact: {
    backgroundColor: "#f5f5f5",
    maxWidth: 1920,
  },
  contact__content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 1258,
    margin: "auto",

    "& h1": {
      color: "#0864B1",
      fontSize: 50,
    },
    "& label": {
      color: "#0864B1",
      fontSize: 35,
      fontWeight: "bold",
      marginBotton: 40,
      marginRight: 20,
    },
    "& input": {
      color: "#676767",
      height: 80,
      fontSize: 30,
      outline: 0,

      border: "none",
      "& hover": {
        border: "none",
      },
    },
  },
  input__subject: {
    "& input": {
      outline: 0,
    },
  },
  input__first: {
    justifyContent: "space-between",
  },
  text__area: {
    border: "none",
    color: "#676767",
    fontSize: 20,

    maxWidth: 1220,
    outline: 0,
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
}));

export default useStyles;
