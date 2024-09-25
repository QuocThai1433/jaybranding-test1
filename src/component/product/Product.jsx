/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Product.scss";
import image1 from "../images/Product-Menu-Master-AI.png";
import image2 from "../images/23.png";
import image3 from "../images/24.png";
import image4 from "../images/Mobile-1.png";
import arrowRight from "../svg/web/arrow-rigt-btn.svg";

export const Product = () => {
  return (
    <div className="product">
      <div className="product__images1">
        <h1 className="product__images1__title">OGAWA</h1>
        <label>
          OGAWA takes pride in creating revolutionary ideas to innovate and
          exceptional engineering practices to deliver the ultimate rejuvenating
          experiences.​
        </label>

        <div className="product__images1__title__img-container">
          <img src={image1} alt="Product image 1" />
        </div>
      </div>
      <div className="product__images2">
        <img src={image2} alt="Product image 2" />
        <div className="product__images2__info">
          <span>MASTER DRIVE SERIES​</span>
          <p>More than A.I​</p>
          <label>
            Discover the Technology of Tomorrow, for the Best Massage Today.
            Each Master Drive is built to be ‘different’. Engineered with
            state-of-the-art technology, indulge in the best massage experience
            that is unique to each individual user.{" "}
          </label>
          <div className="see-more-btn">
            <label> See More</label>
            <img src={arrowRight} alt="" />
          </div>
        </div>
      </div>
      <div className="product__images3">
        <div className="product__images3__info">
          <span>FOOT SERIES​</span>
          <p>Safe & Caring​</p>
          <label>
            Innovative design and adaptive functionality, get total rejuvenation
            and maximum massage coverage for your entire legs​
          </label>
          <div className="see-more-btn">
            <label> See More</label>
            <img src={arrowRight} alt="" />
          </div>
        </div>
        <img src={image3} alt="Product image 3" />
      </div>
      <div className="product__images4">
        <img src={image4} alt="Product image 4" />
        <div className="product__images4__info">
          <span>MOBILE SERIES​​</span>
          <p>Excite your journey​​</p>
          <label>
            Designed specifically to meet the demands of a​ digital and
            sedentary lifestyle.
          </label>
          <div className="see-more-btn">
            <label> See More</label>
            <img src={arrowRight} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
