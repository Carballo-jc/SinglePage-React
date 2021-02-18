import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  testimonial: {
    maxWidth: 1920,
    backgroundColor: "#F5F5F5",
  },
  testimonial__content: {
    display: "flex",
    maxWidth: 1575,
    flexDirection: "column",

    paddingTop: 100,
    "& h1": {
      color: "#0864B1",
      fontSize: 50,
      margin: "auto",
      marginBottom: 60,
    },
  },
  testimonial__text: {
    // display: "flex",
    maxWidth: 1130,
    margin: "auto",
    marginBottom: 100,
    fontSize: 30,
    color: "#676767",
    backgroundColor: "#FFFFFF",
    "& article": {
      margin: 100,
    },
  },
  testimoniales__text__final: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#0864B1",
    fontSize: 30,
    fontWeight: "bold",
    height: 65,

    "& h3": {
      color: "#676767",
      fontSize: 30,
    },
  },
  subtitle: {
    marginLeft: 470,
  },
  simbol: {
    fontSize: 70,
    color: "#0864B1",
    fontWeight: "bold",
  },
}));
export default useStyles;
