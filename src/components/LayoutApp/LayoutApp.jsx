import React from "react";
// Antd design imports
import { Drawer } from "antd";
const { Content, Footer } = Layout;
import { useDispatch, useSelector } from "react-redux";
import { openDrawer } from "../../store/authSlice";
import { Breadcrumb, Layout, theme } from "antd";
// ------------------------------
// import HeaderMenu from "../HeaderMenu";
// import Cart from "../Cart";
import { Cart, HeaderMenu } from "../../components";
import { Outlet } from "react-router-dom";
import s from "./layout.module.css";
const LayoutApp = () => {
  const dispatch = useDispatch();
  const isLogin = false;
  const open = useSelector((state) => state.auth.drawerOpen);
  const purchasedProduct = useSelector((state) => state.auth.cart);
  return (
    <Layout>
      <HeaderMenu></HeaderMenu>
      <Content>
        <div className={s.container}>
          <Outlet></Outlet>
        </div>
        <Cart></Cart>
      </Content>
      <Footer>Frontend ©2023 Created by Amir </Footer>
    </Layout>
  );
};

export default LayoutApp;
