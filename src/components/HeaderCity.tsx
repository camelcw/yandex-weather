import { Button, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HeaderCity = () => {
  const navigate = useNavigate();
  return (
    <Header>
      <Button onClick={() => navigate(-1)} type="primary">
        Назад
      </Button>
      <Link to="/main">Главная</Link>
    </Header>
  );
};

export default HeaderCity;
