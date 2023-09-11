import React from "react";
// Antd design imports
const { Content, Footer } = Layout;
import { Breadcrumb, Layout, theme } from "antd";
// ------------------------------
import HeaderMenu from "../HeaderMenu";
import { Outlet } from "react-router-dom";
import s from "./layout.module.css";
const LayoutApp = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const isLogin = false;
  return (
    <Layout>
      <HeaderMenu></HeaderMenu>
      <Content>
        <div className={s.container}>
          <Outlet></Outlet>
        </div>
      </Content>
      <Footer>Frontend ©2023 Created by Amir </Footer>
    </Layout>
  );
};

export default LayoutApp;
