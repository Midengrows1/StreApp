import React from "react";
// Antd design imports
import { Drawer } from "antd";
const { Content, Footer } = Layout;
import { useDispatch, useSelector } from "react-redux";
import { openDrawer } from "../../store/authSlice";
import { Breadcrumb, Layout, theme } from "antd";
// ------------------------------
import HeaderMenu from "../HeaderMenu";
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
        <Drawer
          title="Basic Drawer"
          placement="right"
          onClose={() => dispatch(openDrawer())}
          open={open}
        >
          {purchasedProduct.map((item, index) => {
            return <p key={item.id}>{item.title}</p>;
          })}
        </Drawer>
      </Content>
      <Footer>Frontend ©2023 Created by Amir </Footer>
    </Layout>
  );
};

export default LayoutApp;
