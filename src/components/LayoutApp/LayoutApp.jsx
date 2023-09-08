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
        <Breadcrumb className={s.breadcrumb}>
          <Breadcrumb.Item>Главная</Breadcrumb.Item>
          <Breadcrumb.Item>Авторизация</Breadcrumb.Item>
        </Breadcrumb>
        <div className={s.container}>
          <Outlet></Outlet>
        </div>
      </Content>
      <Footer>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default LayoutApp;
