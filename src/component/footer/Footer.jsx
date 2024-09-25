import React from "react";
import "./Footer.scss";
import rightArrowIcon from "../svg/web/arrow-right.svg";
import downArrowIcon from "../svg/mobile/arrow-down-slide-show.svg";
import notification from "../svg/notificattion.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__item__title footer__product">
        <div className="footer__item__title ">
          <h1>Product</h1>
          <img
            className="down-arrow-icon"
            src={downArrowIcon}
            alt=""
          />
        </div>
        <div className="footer__product__item">
          <div className="footer__product__item__arrowright-icon">
            <img src={rightArrowIcon} alt="Product Icon" />
            <a href="#" aria-label="Massage Chairs">
              Massage Chairs
            </a>
          </div>
          <div className="footer__product__item__arrowright-icon">
            <img src={rightArrowIcon} alt="Product Icon" />
            <a href="#" aria-label="Massage Chairs">
              Foot Massager
            </a>
          </div>
          <div className="footer__product__item__arrowright-icon">
            <img src={rightArrowIcon} alt="Product Icon" />
            <a href="#" aria-label="Massage Chairs">
              Sport Series​
            </a>
          </div>
          <div className="footer__product__item__arrowright-icon">
            <img src={rightArrowIcon} alt="Product Icon" />
            <a href="#" aria-label="Mobile Series">
              Mobile Series
            </a>
          </div>
          <div className="footer__product__item__arrowright-icon">
            <img src={rightArrowIcon} alt="Product Icon" />
            <a href="#" aria-label="Handy Massage">
              Handy Massage
            </a>
          </div>
          <div className="footer__product__item__arrowright-icon">
            <img src={rightArrowIcon} alt="Product Icon" />
            <a href="#" aria-label="Beauty Series">
              Beauty Series
            </a>
          </div>
          <div className="footer__product__item__arrowright-icon">
            <img src={rightArrowIcon} alt="Product Icon" />
            <a href="#" aria-label="Home Series">
              Home Series
            </a>
          </div>
        </div>
      </section>
      <section className="footer__item footer__shop-promotion">
        <div className="footer__item footer__shop-promotion__shop">
          <div className="footer__item__title">
            <h1>Shop</h1>
            <img
              className="down-arrow-icon"
              src={downArrowIcon}
              alt=""
            />
          </div>
          <div className="footer__shop-promotion__shop__item">
            <div className="footer__product__item__arrowright-icon">
              <img src={rightArrowIcon} alt="Right Arrow" />
              <a href="#" aria-label="Our Showroom">
                Our Showroom
              </a>
            </div>
            <div className="footer__product__item__arrowright-icon">
              <img src={rightArrowIcon} alt="Right Arrow" />
              <a href="#" aria-label="Shop Online">
                Shop Online
              </a>
            </div>
          </div>
        </div>
        <div className="footer__item footer__shop-promotion__promotion">
          <div className="footer__item__title">
            <h1>Promotion</h1>
            <img
              className="down-arrow-icon"
              src={downArrowIcon}
              alt=""
            />
          </div>
          <div className="footer__shop-promotion__promotion__item">
            <div className="footer__product__item__arrowright-icon">
              <img src={rightArrowIcon} alt="Right Arrow" />
              <a href="#" aria-label="Monthly Promo">
                Monthly Promo
              </a>
            </div>
            <div className="footer__product__item__arrowright-icon">
              <img src={rightArrowIcon} alt="Right Arrow" />
              <a href="#" aria-label="Experiential Program">
                Experiential Program
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="footer__item footer__faq">
        <div className="footer__item__title">
        <h1>FAQ</h1>
        <img
          className="down-arrow-icon"
          src={downArrowIcon}
          alt=""
        />
        </div>
        <div className="footer__faq__item">
          <div className="footer__product__item__arrowright-icon">
            <img src={rightArrowIcon} alt="Right Arrow" />
            <a href="#" aria-label="Payments">
              Payments
            </a>
          </div>
          <div className="footer__product__item__arrowright-icon">
            <img src={rightArrowIcon} alt="Right Arrow" />
            <a href="#" aria-label="Terms & Conditions">
              Terms & Conditions
            </a>
          </div>
          <div className="footer__product__item__arrowright-icon">
            <img src={rightArrowIcon} alt="Right Arrow" />
            <a href="#" aria-label="Privacy Policy">
              Privacy Policy
            </a>
          </div>
          <div className="footer__product__item__arrowright-icon">
            <img src={rightArrowIcon} alt="Right Arrow" />
            <a href="#" aria-label="Trade In Policy">
              Trade In Policy
            </a>
          </div>
        </div>
        <div className="footer__faq__img-container">
          <img
            className="footer__faq__img-container__logo-notificate"
            src={notification}
            alt=""
          />
        </div>
      </section>
    </footer>
  );
};
