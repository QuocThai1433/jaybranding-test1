import React from "react";
import "./SlideShow.scss";
import point from "../svg/web/scroll-point.svg";
import arrowRight from "../svg/web/arrow-rigt-btn.svg";

export const SlideShow = () => {
  return (
    <div className="slide-show">
      <span className="slide-show__title">Live Better And Healthier</span>

      <div className="slide-show__learn-more-btn">
        <span>Learn More</span>
        <img src={arrowRight} alt="" />
      </div>
      <div className="points">
        <div className="point point-active"></div>
        <div className="point"></div>
        <div className="point"a></div>
        <div className="point"></div>
      </div>
      <label>SCROLL DOWN</label>
    </div>
  );
};
