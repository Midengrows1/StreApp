import React from "react";
import s from "./notfoundPage.module.css";
import { NavLink } from "react-router-dom";
const NotfoundPage = () => {
  return (
    <div className={s.notfoundPage}>
      <div className={s.notfoundPage__image}>
        <img src="../../../public/404Error.png" alt="" />
      </div>
      <div className={s.notfoundPage__error}>
        <h1>Page Not Found</h1>
        <NavLink to='/'>Go back Home</NavLink>
      </div>
    </div>
  );
};

export default NotfoundPage;
