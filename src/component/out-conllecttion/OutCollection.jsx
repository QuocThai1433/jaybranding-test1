/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import image1 from "../svg/web/outcollection.svg";
import ourCollectionImg1 from "../images/our-collection-img-1.png";
import image2 from "../images/22.jpg";
import rightArrow from "../svg/mobile/arrow-right-slide-show.svg";
import leftArrow from "../svg/mobile/arrow-left-slide-show.svg";
import "./OutCollection.scss";
import Link from "antd/es/typography/Link";
import arrowRight from "../svg/web/arrow-rigt-btn.svg";

export const OutCollection = () => {
  return (
    <div className="ourcollection">
      <div className="ourcollection__body">
        <h1>Our Collection</h1>
        <div className="ourcollection__body__web">
          <Link to="/">
            <div className="img-item-web">
              <img src={image1} alt="Product Menu Master AI" />
              <div className="info">
                <a>AI</a>
                <label>VIEW ALL COLLECTIONS​ </label>
                <div className="discover-more-btn">
                  <span>Discover More</span>
                  <img src={arrowRight} alt="" />
                </div>
              </div>
            </div>

            <div className="image image1"></div>
            <div className="image image2"></div>
          </Link>
        </div>
        <div className="ourcollection__body__mobile">
          <div className="ourcollection__body__mobile__slide">
            <img className="left-arrow" src={leftArrow} alt="Left arrow" />
            <img
              className="slide-image"
              src={ourCollectionImg1}
              alt="Image 22"
            />
            <img className="right-arrow" src={rightArrow} alt="Right arrow" />
          </div>
          <span>AI</span>
          <label>VIEW ALL COLLECTIONS​</label>
        </div>
      </div>
    </div>
  );
};
