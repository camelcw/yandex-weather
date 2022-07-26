import { Menu } from "antd";
import type { MenuProps } from "antd";
import React from "react";
import { Header } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";

const HeaderMain = () => {
  return (
    <Header>
      <Link to="/moskov">Москва</Link>
      <Link to="/kazan">Казань</Link>
      <Link to="/peter">Санкт-Петербург</Link>
    </Header>
  );
};

export default HeaderMain;
