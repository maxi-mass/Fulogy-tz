import React from "react";
import { slide as Menu } from "react-burger-menu";
import { BURGER_MENU_ITEMS } from "../data";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  return (
    <Menu right>
      {BURGER_MENU_ITEMS.map(item => (
        <Link to={item.url}>{item.title}</Link>
      ))}
    </Menu>
  );
};

export default BurgerMenu;
