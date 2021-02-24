import React from "react";

import About from "./about/About";
import Feature from "./feature/Features";
import Articles from "./articles/Articles";
import Testimonials from "./testimonial/Testimonials";
import SectionJoin from "./sectionJoin/SectionJoin";
import Contact from "./contacts/Contact";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Container } from "@material-ui/core";

const Layout = () => {
  return (
    <>
      <Header />
      <About />
      <Feature />
      <Articles />
      <Testimonials />
      <SectionJoin />
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
