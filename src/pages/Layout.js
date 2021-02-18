import React from "react";

import About from "./about/About";
import Feature from "./feature/Features";
import Articles from "./articles/Articles";
import Testimonials from "./testimonial/Testimonials";
import SectionJoin from "./sectionJoin/SectionJoin";
import Contact from "./contacts/Contact";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <About />
      <Feature />
      <Articles />
      <Testimonials />
      <SectionJoin />
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
