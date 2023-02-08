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
import me from "./Img/me.jpg";

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
                      Full-Stack Web Developer
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
                    <a
                      href="https://drive.google.com/file/d/1y2upjQHF9KBpzM6iLUvniRnUotps7xE3/view"
                      class="awilo_fn_main_button"
                    >
                      <span>Download CV</span>
                      <span>Download CV</span>
                    </a>
                  </div>
                  <h3 style={{ fontSize: 30 }}>My Links:</h3>
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
                        <a href="mailto:ecarv97@gmail.com">
                          <MailIcon />
                          ecarv97@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="about_right"></div>
              <img
                alt="me"
                src={me}
                style={{ width: 600, height: 500, marginRight: 200 }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
