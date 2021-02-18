// import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  feature: {
    backgroundColor: "#F5F5F5",
    maxWidth: 1920,
  },
  feature__content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    maxWidth: 1452,
  },
  feature_title: {
    color: "#0864B1",
    margin: "auto",
    fontSize: 50,
    borderBlockEnd: "4px solid #676767",
  },
  feature__items: {
    display: "flex",
    justifyContent: "space-between",
  },
  feature__item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 140,
    height: 500,
    "& p": {
      fontSize: 32,
      color: "#676767",
      textAlign: "center",
      padding: 20,
    },
  },
  image_currency: {
    backgroundColor: "#0864B1",
    height: 200,
    width: 200,
  },
}));

export default useStyles;
