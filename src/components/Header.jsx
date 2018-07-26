import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header-wrap">
        <header className="header">
          <div className="header-user">
            <div className="header-user" />
            <div className="header-user__name">Ruslan Yehorenko</div>
          </div>
          <div className="header-menu">
            <ul>
              <li>
                <NavLink
                  exact
                  to="/"
                  className="header-menu__link"
                  activeClassName="active"
                >
                  How it works
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/calendar"
                  className="header-menu__link"
                  activeClassName="active"
                >
                  Calendar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacts"
                  className="header-menu__link"
                  activeClassName="active"
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
