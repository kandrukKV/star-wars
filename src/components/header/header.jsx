import React from "react";
import {NavLink} from "react-router-dom";
import {AppRoute} from "../../const";
import "./header.scss";
import SearchPanel from "../search-panel/search-panel";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">StarWars</div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink
              className="header__nav-link"
              activeClassName="header__nav-link--active"
              exact
              to={AppRoute.MAIN}>
              Main
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              className="header__nav-link"
              activeClassName="header__nav-link--active"
              exact
              to={AppRoute.FAVORITES}>Favorite heroes
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="header__search">
        <SearchPanel/>
      </div>
    </header>
  );
};

export default Header;
