import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  article: {
    Width: "100%",
    // height: 1079,
    color: "#ffff",
  },
  article__content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    maxWidth: 1550,
    // height: 854,
    padding: 100,
  },
  article__titles: {
    fontSize: 50,
    // maxWidth: 535,
    height: 75,
    color: "#0864B1",
    // marginTop: 91,
    // marginLeft: "auto",
  },
}));

export default useStyles;
