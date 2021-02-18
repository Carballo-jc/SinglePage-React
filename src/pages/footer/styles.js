import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: "#0864B1",
    display: "flex",
    justifyContent: "space-between",
    maxWidth: 1920,
  },
  footer__text: {
    display: "block",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 90,
    marginLeft: 120,
    "& p": {
      color: "#FFFFFF",
      fontSize: 18,
    },
    "& img": {
      cursor: "pointer",
    },
  },
  footer__sosial: {
    marginTop: 90,
    width: 400,
    "& h4": {
      fontSize: 30,
      color: "#fff",
    },
  },
  footer__logos: {
    display: "flex",
    justifyContent: "space-between",
    "& img": {
      cursor: "pointer",
    },
  },
  footer__link: {
    color: "#FFFFFF",
    fontSize: 22,
  },
  footer__detail: {
    display: "flex",
    justifyContent: "space-between",
  },
  footer__copyright: {
    marginTop: 100,
    fontSize: 25,
    fontWeight: "bold",
  },
}));

export default useStyles;
