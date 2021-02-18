import React from "react";
import blueTrading from "../../assets/BlueTrading.svg";
import facebook from "../../assets/Grupo 192.svg";
import twitter from "../../assets/Grupo 193.svg";
import instagram from "../../assets/Grupo 194.svg";
import youtube from "../../assets/Grupo 195.svg";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Grid container justify="center">
        <Grid item xs={12} md={6}>
          <div className={classes.footer__text}>
            <div className={classes.footer__detail}>
              <img src={blueTrading} alt="trading" />
              <p>
                Keas 69 Str. 15234, <br /> East NileAthens, <br /> Greece +249
                9123 456 78 +249 9123 456 78 
              </p>
            </div>
            <div className={classes.footer__copyright}>
              <p>2020 Reserved by BlueTrading Company Limited.</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.footer__sosial}>
            <h4>Stay connected with us</h4>
            <div className={classes.footer__logos}>
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
              <img src={youtube} alt="" />
            </div>
            <div className={classes.footer__link}>
              <p>
                Made with <span>by Yassin Salih</span>
              </p>
              <p>https://behance.net/yassinsalih96</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
