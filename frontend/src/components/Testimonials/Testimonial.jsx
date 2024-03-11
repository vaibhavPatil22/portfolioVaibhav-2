import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/Profle2.avif";
import profilePic2 from "../../img/Profile1 copy.jpg";
import profilePic3 from "../../img/Profile3 copy.jpg";
// import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        
       
    
     "Under Vaibhav's expertise, our website flourished with a polished design and flawless functionality. Exceptional communication, timely delivery, and strong skills. Minor UI refinements are needed, but overall, a commendable job. Highly recommend their services for web development.",
    },
    {
      img: profilePic2,
      review:
      "The developer vaibhav showcased exceptional skill in creating our website. The design is sleek, and functionality is seamless. Effective communication and timely delivery. Minor UI adjustments needed, but overall, a commendable job. Highly recommend their services.",
    },
    {
      img: profilePic3,
      review:
        "Vaibhav for crafting a polished website with a sleek design and seamless functionality. Responsive and secure, with minor UI tweaks required. Great communication throughout. Excellent work!",
    }
   
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
