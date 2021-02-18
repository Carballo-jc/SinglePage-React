import React from "react";
import NavBar from "../../components/NavBar";
import logo_header from "../../assets/logo-content.png";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <NavBar />
      <div className={classes.header__content}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className={classes.header__descriptio}>
              <h3>Invest in the Future of Humanity</h3>
              <p className={classes.parrafo}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat,
              </p>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <img
              className={classes.header__logo}
              src={logo_header}
              alt="logo"
            />
          </Grid>
        </Grid>
      </div>
    </header>
  );
};

export default Header;
