import React from "react";
import s from "./app.module.css";
import { HeaderMenu, PrivateRoute, LayoutApp } from "./components";
import { Home, NotfoundPage, Login, Posts, Products, Logout } from "./pages";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutApp />}>
          <Route path="auth" element={<Login />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="/" index element={<Home></Home>} />
          </Route>
          <Route path="products" element={<Products></Products>}></Route>
          <Route path="posts" element={<Posts></Posts>}></Route>
        </Route>
        <Route path="*" element={<NotfoundPage></NotfoundPage>}></Route>
      </Routes>
    </div>
  );
};
export default App;
