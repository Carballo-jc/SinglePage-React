import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  about: {
    color: "#ffff",
    // height: 930,
    width: "100%",
  },
  about__content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: 100,
    maxWidth: 1452,
    // height: 933,
    marginTop: 25,
    // marginBottom: 85,
  },
  about__title: {
    color: "#0864B1",
    fontSize: 50,
    // marginLeft: 513,
    // width: 500,
    height: 116,
    "& h2": {
      // borderBlockEnd: "4px solid #676767",
    },
  },
  about__text: {
    fontSize: 35,
    color: "#676767",
    textAlign: "center",
    margin: "auto",
    lineHeight: 2,
    // width: 1166,
    // height: 260,
  },
  items: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
}));
export default useStyles;
