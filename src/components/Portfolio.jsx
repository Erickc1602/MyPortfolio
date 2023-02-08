import React from "react";
import "../css/base.css";
import "../css/fontello.css";
import "../css/magnific-popup.css";
import "../css/style.css";
import "../css/swiper.css";

import { Link } from "react-router-dom";
import goated from "./Img/Screenshot (35).png";
import RS from "./Img/Screenshot (36).png";
import brasil from "./Img/Screenshot (37).png";

const Portfolio = () => {
  return (
    <>
      <div class="awilo_fn_title">
        <h5>Portfolio / Projects</h5>
        <h3>Here are some of my projects:</h3>
      </div>
      <section id="portfolio">
        <div class="container wide">
          <div class="awilo_fn_portfolio_grid">
            <ul class="awilo_fn_masonry">
              <li class="grid-sizer"></li>
              <li class="awilo_fn_masonry_in tmwide66"></li>
              <Link to="https://goatededc.netlify.app/">
                <li class="awilo_fn_masonry_in">
                  <div class="list_item">
                    <div class="img_holder">
                      <img src={goated} alt="" />
                      <div class="awilo_fn_abs_img" data-bg-img={goated}></div>
                    </div>
                    <div class="title_holder">
                      <div class="title_abs">
                        <div class="layer" data-depth="0.3"></div>
                      </div>
                      <div class="title_cat">
                        <p>
                          <a
                            href="https://goatededc.netlify.app/"
                            class="awilo_fn_circle_link"
                          >
                            .
                          </a>
                          <span class="sep"></span>
                          <a
                            href="https://goatededc.netlify.app/"
                            class="awilo_fn_circle_link"
                          >
                            .
                          </a>
                        </p>
                      </div>
                      <div class="title_name">
                        <h3>
                          <a href="https://goatededc.netlify.app/">GOATED</a>
                        </h3>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <h2 style={{ color: "gray" }}>Clothing Website </h2>
                  <p style={{ color: "white" }}>
                    This is a full-stack web application designed to showcase
                    and sell clothing items. The website features a clean and
                    user-friendly interface, making it easy for customers to
                    browse and purchase items. <br />
                    The website is built using the popular MERN stack, including
                    MongoDB for data storage, Express for server-side logic,
                    React for the front-end user interface, and Node.js for the
                    back-end runtime environment. This technology stack provides
                    a robust, scalable, and efficient platform for the website,
                    ensuring smooth and seamless user experiences.
                  </p>
                </li>
              </Link>
              <Link to="https://realstateedc.netlify.app/">
                <li class="awilo_fn_masonry_in">
                  <div class="list_item">
                    <div class="img_holder">
                      <img src={RS} alt="" />
                      <div class="awilo_fn_abs_img" data-bg-img={RS}></div>
                    </div>
                    <div class="title_holder">
                      <div class="title_abs">
                        <div class="layer" data-depth="0.3"></div>
                      </div>
                      <div class="title_cat">
                        <p>
                          <a
                            href="https://realstateedc.netlify.app/"
                            class="awilo_fn_circle_link"
                          >
                            .
                          </a>
                          <span class="sep"></span>
                          <a
                            href="https://realstateedc.netlify.app/"
                            class="awilo_fn_circle_link"
                          >
                            .
                          </a>
                        </p>
                      </div>
                      <div class="title_name">
                        <h3>
                          <a href="https://realstateedc.netlify.app/">K.M.E</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <h2 style={{ color: "gray" }}>Real Estate website </h2>
                  <p style={{ color: "white" }}>
                    Designed to showcase properties and simplify the search
                    process. Built with modern front-end technologies and a
                    robust API, Browse a collection of properties and find your
                    dream home with ease.
                  </p>
                </li>
              </Link>
              <Link to="https://brazilwc.netlify.app/">
                <li class="awilo_fn_masonry_in">
                  <div class="list_item">
                    <div class="img_holder">
                      <img src={brasil} alt="" />
                      <div class="awilo_fn_abs_img" data-bg-img={brasil}></div>
                    </div>
                    <div class="title_holder">
                      <div class="title_abs">
                        <div class="layer" data-depth="0.3"></div>
                      </div>
                      <div class="title_cat">
                        <p>
                          <a
                            href="https://brazilwc.netlify.app/"
                            class="awilo_fn_circle_link"
                          >
                            Old Internet
                          </a>
                          <span class="sep">/</span>
                          <a
                            href="https://brazilwc.netlify.app/"
                            class="awilo_fn_circle_link"
                          >
                            HTML
                          </a>
                        </p>
                      </div>
                      <div class="title_name">
                        <h3>
                          <a href="https://brazilwc.netlify.app/">Brazil W.C</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <h2 style={{ color: "gray" }}>Brazil W.C </h2>
                  <p style={{ color: "white" }}>
                    Step into the world of Brazilian soccer with this portfolio
                    project, a celebration of Brazil's world cup titles. Built
                    using HTML and CSS, this website brings the old internet
                    style to life, showcasing the country's glorious victories
                    in the most prestigious tournament in world football.
                  </p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </section>
      {/* CONTACT Message */}
      <div class="awilo_fn_contactme">
        <p class="text">
          Did you like what you see above? Don’t hesitate, request for a new
          project or contact me. :)
        </p>
        <a href="mailto:ecarv97@gmail.com" class="awilo_fn_main_button">
          <p class="btn">
            <span>Contact Me</span>
            <span>Contact Me</span>
          </p>
        </a>
      </div>
    </>
  );
};

export default Portfolio;
