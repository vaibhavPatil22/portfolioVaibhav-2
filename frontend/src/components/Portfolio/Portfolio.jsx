import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/vaibhavResidency.png";
import Ecommerce from "../../img/vaibhavDinning.png";
import HOC from "../../img/EcommerceWebsite.png";
import MusicApp from "../../img/vaibhavRestaurant1.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://vaibhav-realestate.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={Sidebar} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://vaibhav-dinning.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://vaibhav-restaurant.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={MusicApp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://vaibhav-restaurant.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={HOC} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
