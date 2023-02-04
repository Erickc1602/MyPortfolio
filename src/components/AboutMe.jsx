import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import "../css/base.css";
import "../css/fontello.css";
import "../css/magnific-popup.css";
import "../css/style.css";
import "../css/swiper.css";
import me from "./Img/33293743410_d9c5f43d7d_k.jpg";

const AboutMe = () => {
  return (
    <>
      <section id="about">
        <div class="container wide">
          <div class="awilo_fn_about">
            <div class="about_in">
              <div class="about_left">
                <div class="l_inner">
                  <div class="about_title">
                    <h5>Welcome!</h5>
                    <h3>
                      {" "}
                      I am <br />
                      Erick De Carvalho, <br />
                      Full-Stack Web Dev.
                    </h3>
                  </div>
                  <div class="about_desc">
                    <p>
                      Hi, I'm a Brazilian immigrant and a full-stack web
                      developer with a passion for creating innovative and
                      intuitive web applications. My expertise in both front-end
                      and back-end development, combined with excellent
                      communication skills, allows me to effectively collaborate
                      with cross-functional teams to bring projects to life. I
                      am always eager to learn new skills and stay up-to-date
                      with the latest industry trends.
                    </p>
                  </div>
                  <div class="about_btn">
                    <a href="/" class="awilo_fn_main_button">
                      <span>Download CV</span>
                      <span>Download CV</span>
                    </a>
                  </div>
                  <div class="about_social">
                    <ul>
                      <li>
                        <Link to="https://www.linkedin.com/in/erick-de-carvalho-7638641b0/">
                          <LinkedInIcon />
                          LinkedIn
                        </Link>
                      </li>
                      <li>
                        <Link to="https://github.com/Erickc1602">
                          <GitHubIcon />
                          Github
                        </Link>
                      </li>
                      <li>
                        <MailIcon />
                        ecarv97@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="about_right">
                <div class="r_inner" id="scene">
                  <div class="layer about_img" data-depth="0.5">
                    <img src="img/thumb/thumb-600-700.jpg" alt="" />
                    <div class="awilo_fn_abs_img" data-bg-img=""></div>
                  </div>
                  <div class="awilo_fn_abs_img" data-bg-img={me}></div>
                  <div class="layer about_border" data-depth="0.3">
                    <img src="img/thumb/thumb-600-700.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
