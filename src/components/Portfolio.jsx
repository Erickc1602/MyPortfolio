import React from "react";
import "../css/base.css";
import "../css/fontello.css";
import "../css/magnific-popup.css";
import "../css/style.css";
import "../css/swiper.css";
import comingsoon from "../components/Img/coming-soon-2022-10-26-06-13-14-utc.jpg";
import { Link } from "react-router-dom";
import goated from "./Img/Screenshot (35).png";
import RS from "./Img/Screenshot (36).png";
import brasil from "./Img/Screenshot (37).png";

const Portfolio = () => {
  return (
    <>
      <div class="awilo_fn_title">
        <h5>Portfolio / Projects</h5>
        <h3>Here, is some of my projects</h3>
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
                            Clothing
                          </a>
                          <span class="sep">/</span>
                          <a
                            href="https://goatededc.netlify.app/"
                            class="awilo_fn_circle_link"
                          >
                            Website
                          </a>
                        </p>
                      </div>
                      <div class="title_name">
                        <h3>
                          <a href="https://goatededc.netlify.app/">GOATED</a>
                        </h3>
                      </div>
                    </div>
                  </div>
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
                            Real State
                          </a>
                          <span class="sep">/</span>
                          <a
                            href="https://realstateedc.netlify.app/"
                            class="awilo_fn_circle_link"
                          >
                            Website
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
                </li>
              </Link>

              <li class="awilo_fn_masonry_in">
                <div class="list_item">
                  <div class="img_holder">
                    <img src={comingsoon} alt="" />
                    <div
                      class="awilo_fn_abs_img"
                      data-bg-img={comingsoon}
                    ></div>
                  </div>
                  <Link to="">
                    <div class="title_holder">
                      <div class="title_abs">
                        <div class="layer" data-depth="0.3"></div>
                      </div>
                      <div class="title_cat">
                        <p>
                          <a href="/" class="awilo_fn_circle_link">
                            New
                          </a>
                          <span class="sep">/</span>
                          <a href="/" class="awilo_fn_circle_link">
                            Website
                          </a>
                        </p>
                      </div>
                      <div class="title_name">
                        <h3>
                          <a href="/">Coming Soon</a>
                        </h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </li>
              <li class="awilo_fn_masonry_in"></li>
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
        <p class="btn">
          <a href="#contact" class="awilo_fn_main_button">
            <span>Contact Me</span>
            <span>Contact Me</span>
          </a>
        </p>
      </div>
    </>
  );
};

export default Portfolio;
