import React from "react";
import { NavLink } from "react-router-dom";
import { MENU_ITEMS } from "../data";

const Footer = () => {
  return (
    <div className="footer">
      <nav>
        <div class="nav-wrapper">
          <ul>
            {MENU_ITEMS.map(item => (
              <li>
                <NavLink activeClassName="active" exact to={item.url}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
