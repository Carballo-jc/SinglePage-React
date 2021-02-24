import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  join: {
    backgroundColor: "#0864B1",

    maxWidth: 1920,
  },
  join__content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: 100,
  },
  join__title: {
    fontSize: 70,
  
    color: "#ffff",
    fontWeight: "bold",
    paddingLeft: 40,
  },
  join__search: {
  
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
    "& .MuiFormControl-root": {
      backgroundColor: "white",
      margin: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    "& input": {
      fontSize: 35,
      outline: 0,
    },
  },
  input__search: {
    backgroundColor: "#0864B1",
    color: "#fff",
    cursor: "pointer",
    height: 100,
    marginTop: 20,
    boxShadow: "3px 4px 8px #0864B11A",
    border: "5px solid #FFFFFF",
  },
}));

export default useStyles;
