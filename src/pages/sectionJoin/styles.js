import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  join: {
    backgroundColor: "#0864B1",

    maxWidth: 1920,
    // height: 500,
  },
  join__content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: 100,
    // padding: 50,
  },
  join__title: {
    fontSize: 70,
    // width: 640,
    // height: 320,
    color: "#ffff",
    fontWeight: "bold",
    paddingLeft: 40,
  },
  join__search: {
    // width: 600,
    // height: 240,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingRight: 80,
    marginBottom: 20,
    "& input": {
      fontSize: 35,
      outline: 0,
    },
  },
  input__search: {
    backgroundColor: "#0864B1",
    color: "#fff",
    cursor: "pointer",
    // width: 400,
    height: 100,
    marginTop: 20,
    boxShadow: "3px 4px 8px #0864B11A",
    border: "5px solid #FFFFFF",
  },
}));

export default useStyles;
