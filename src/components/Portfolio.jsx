import React from "react";
import "../css/base.css";
import "../css/fontello.css";
import "../css/magnific-popup.css";
import "../css/style.css";
import "../css/swiper.css";
import comingsoon from "../components/Img/coming-soon-2022-10-26-06-13-14-utc.jpg";

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
              <li class="awilo_fn_masonry_in">
                <div class="list_item">
                  <div class="img_holder">
                    <img src={comingsoon} alt="" />
                    <div
                      class="awilo_fn_abs_img"
                      data-bg-img={comingsoon}
                    ></div>
                  </div>
                  <div class="title_holder">
                    <div class="title_abs">
                      <div class="layer" data-depth="0.3"></div>
                    </div>
                    <div class="title_cat">
                      <p>
                        <a href="/" class="awilo_fn_circle_link">
                          Clothing
                        </a>
                        <span class="sep">/</span>
                        <a href="/" class="awilo_fn_circle_link">
                          Website
                        </a>
                      </p>
                    </div>
                    <div class="title_name">
                      <h3>
                        <a href="/">GOATED</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
              <li class="awilo_fn_masonry_in">
                <div class="list_item">
                  <div class="img_holder">
                    <img src={comingsoon} alt="" />
                    <div
                      class="awilo_fn_abs_img"
                      data-bg-img={comingsoon}
                    ></div>
                  </div>
                  <div class="title_holder">
                    <div class="title_abs">
                      <div class="layer" data-depth="0.3"></div>
                    </div>
                    <div class="title_cat">
                      <p>
                        <a href="/" class="awilo_fn_circle_link">
                          Fruit
                        </a>
                        <span class="sep">/</span>
                        <a href="/" class="awilo_fn_circle_link">
                          Cook
                        </a>
                      </p>
                    </div>
                    <div class="title_name">
                      <h3>
                        <a href="/">Fresh Cherry</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
              <li class="awilo_fn_masonry_in">
                <div class="list_item">
                  <div class="img_holder">
                    <img src={comingsoon} alt="" />
                    <div
                      class="awilo_fn_abs_img"
                      data-bg-img={comingsoon}
                    ></div>
                  </div>
                  <div class="title_holder">
                    <div class="title_abs">
                      <div class="layer" data-depth="0.3"></div>
                    </div>
                    <div class="title_cat">
                      <p>
                        <a href="/" class="awilo_fn_circle_link">
                          Fruit
                        </a>
                        <span class="sep">/</span>
                        <a href="/" class="awilo_fn_circle_link">
                          Fresh
                        </a>
                      </p>
                    </div>
                    <div class="title_name">
                      <h3>
                        <a href="/">Blue Orange</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
              <li class="awilo_fn_masonry_in">
                <div class="list_item">
                  <div class="img_holder">
                    <img src={comingsoon} alt="" />
                    <div
                      class="awilo_fn_abs_img"
                      data-bg-img={comingsoon}
                    ></div>
                  </div>
                  <div class="title_holder">
                    <div class="title_abs">
                      <div class="layer" data-depth="0.3"></div>
                    </div>
                    <div class="title_cat">
                      <p>
                        <a href="/" class="awilo_fn_circle_link">
                          Coming Soon
                        </a>
                        <span class="sep"></span>
                      </p>
                    </div>
                    <div class="title_name">
                      <h3>
                        <p style={{ fontSize: 30 }}>New Project</p>
                      </h3>
                    </div>
                  </div>
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
