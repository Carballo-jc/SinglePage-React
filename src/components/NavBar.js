import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/BlueTrading.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  menu__header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingTop: 50,
    // paddingLeft: 50,
  },
  menu__logo: {
    // width: 280,
    height: 68,
    paddingLeft: 30,
    // padding: 80,
  },
  menu__links: {
    // width: 500,
    fontSize: 30,

    "& a": {
      textAlign: "center",
      color: "#fff",
      textDecoration: "none",
      marginRight: 30,
      top: 71,
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.menu__header}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Link to="#">
            <img className={classes.menu__logo} src={logo} alt="" />
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.menu__links}>
            <Link to="#">About Us</Link>
            <Link to="#">Features</Link>
            <Link to="#">Contact</Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default NavBar;
