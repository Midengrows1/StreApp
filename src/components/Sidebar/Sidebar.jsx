import React from "react";
import s from "./sidebar.module.css";
const Sidebar = ({ ctgarr, setCategory, showAll }) => {
  return (
    <>
      {ctgarr.length > 0 && (
        <aside>
          <nav className={s.Products__aside}>
            <ul className={s.Products__aside_inner}>
              {ctgarr.length > 0 && <li onClick={() => showAll()}>All</li>}
              {ctgarr.map((item) => {
                return (
                  <li key={item} onClick={(e) => setCategory(e)}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
