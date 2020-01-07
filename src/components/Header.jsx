import React from "react";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <div class="nav-wrapper grey darken-4 px1">
          <a href="#" class="brand-logo">
            Fulogy
          </a>
          <ul id="nav-mobile" class="right">
            <li>
              <a href="#">
                <i class="material-icons">shopping_cart</i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="material-icons">menu</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
