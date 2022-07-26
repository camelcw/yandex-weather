import React from "react";
import { Layout } from "antd";
import HeaderMain from "./HeaderMain";
import ContentMain from "./ContentMain";

const LayoutMain = () => {
  return (
    <Layout className="layout">
      <HeaderMain />
      <ContentMain />
    </Layout>
  );
};

export default LayoutMain;
