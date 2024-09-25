import React from "react";
import { navbar } from "../../json/navbar";
import "./HomePage.scss";
import logoImage from "../images/logo/logo.png";
import menuIcon from "../svg/mobile/menu.svg"; // Thêm import cho menu icon

import filterImage from "../svg/web/filter.svg";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__header">
        <div className="home-page__header__logo-container">
          <img className="home-page__header__logo-container__logo" src={logoImage} alt="Logo" />
        </div>

        <div className="home-page__navbar-item">
          {navbar.map((item) => (
            <label className="" key={item.id}>
              {item.name}
            </label>
          ))}
        </div>
        <div className="home-page__language">
          <img
            className="home-page__language__filter-language"
            src={filterImage}
            alt=""
          />
        </div>
        <div className="home-page__header__menu-icon">
          <img src={menuIcon} alt="Menu icon" />
        </div>
      </div>
    </div>
  );
};
