import React from "react";
import {
  HeaderMenu,
  PrivateRoute,
  Products,
  LayoutApp,
  Posts,
} from "./components";
import LoginPage from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import s from "./app.module.css";
import Home from "./pages/Home/Home";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutApp />}>
          <Route path="auth" element={<LoginPage />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="/" index element={<Home></Home>} />
            <Route path="products" element={<Products></Products>}></Route>
            <Route path="posts" element={<Posts></Posts>}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
export default App;
