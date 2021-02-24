import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#2353B2",
    maxWidth: 1920,
  },
  header__logo: {
    maxWidth: 700,
  },
  header__content: {
    display: "flex",
    justifyContent: "space-between",
    // padding: 40,
  },
  header__descriptio: {
    color: "#ffff",

    fontSize: 40,
    maxWidth: 870,
    top: 311,
  },
  parrafo: {
    fontSize: "35px",
  },
}));

export default useStyles;
