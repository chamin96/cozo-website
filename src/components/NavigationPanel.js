import React from "react";
import { Link } from "react-router-dom";
import { LangSelector } from "./LangSelector";

class NavigationPanel extends React.Component {
  render() {
    return (
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <Link to="/" className="logo">
            <img src="assets/img/logo.svg" alt="" className="img-fluid" />
          </Link>
          <form action="" method="post" className="mr-auto pos-rel">
            <input
              type="text"
              name="header-search"
              className="header-search"
              placeholder="Search"
            />
            <i className="fa fa-search search-icon"></i>
          </form>
          <nav className="nav-menu d-none d-lg-block nav-menu-1">
            <ul>
              <li className="drop-down drpdwn-padding">
                <a href="">En</a>
                <LangSelector />
              </li>
              <li className="active">
                <a href="index.html">
                  <span className="header-icons icon icon-info"></span>
                  <div className="header-notifications"></div>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="header-icons icon icon-profile"></span>
                </a>
              </li>
              <li>
                <Link to="/wish-list">
                  <span className="header-icons icon icon-heart"></span>
                  <div className="header-notifications"></div>
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <span className="header-icons icon icon-cart"></span>
                  <div className="header-notifications"></div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default NavigationPanel;
