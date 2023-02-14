import React from "react";
import AboutMe from "../components/AboutMe";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import "../css/base.css";
import "../css/fontello.css";
import "../css/magnific-popup.css";
import "../css/style.css";
import "../css/swiper.css";

const Home = () => {
  return (
    <div class="awilo_fn_wrapper">
      <div class="awilo_fn_content">
        <AboutMe />
        <Skills />
        <div class="awilo_fn_divider"></div>
        <Portfolio />
      </div>
    </div>
  );
};

export default Home;
