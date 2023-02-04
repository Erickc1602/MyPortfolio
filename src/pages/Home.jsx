import React from "react";
import AboutMe from "../components/AboutMe";
import Portfolio from "../components/Portfolio";
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
      </div>
      <div class="awilo_fn_divider"></div>

      <Portfolio />
    </div>
  );
};

export default Home;
