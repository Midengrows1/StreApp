import React from "react";
import s from "./app.module.css";
import { HeaderMenu, PrivateRoute, LayoutApp, Product } from "./components";
import {
  Home,
  NotfoundPage,
  Login,
  Posts,
  Products,
  Logout,
  SingleProduct,
  SearchPage,
} from "./pages";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutApp />}>
          <Route path="auth" element={<Login />}></Route>
          <Route element={<PrivateRoute />}>
            <Route index element={<Home></Home>} />
            <Route path="products" element={<Products></Products>}></Route>
          </Route>
          <Route path="posts" element={<Posts></Posts>}></Route>
          <Route path="logout" element={<Logout></Logout>}></Route>
          <Route
            path="products/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>
          <Route path="search/" element={<SearchPage></SearchPage>}></Route>
        </Route>
        <Route path="*" element={<NotfoundPage></NotfoundPage>}></Route>
      </Routes>
    </div>
  );
};
export default App;
