import s from "./header.module.css";
import { Layout, Menu, Button } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faHouse,
  faStore,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";
const { Header } = Layout;
import { signOut } from "../../store/authSlice";
const HeaderMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signstate = useSelector((state) => state.auth.signState);
  const signingOut = () => {
    dispatch(signOut());
    navigate("/auth");
  };
  return (
    <Header className={s.header}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]} className={s.header_nav}
        items={[
          {
            key: 1,
            label: (
              <NavLink to="/">
                <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon><span>Home</span>
              </NavLink>
            ),
          },
          {
            key: 2,
            label: (
              <NavLink to="/products">
                <FontAwesomeIcon icon={faStore}></FontAwesomeIcon><span>Products</span>
              </NavLink>
            ),
          },
          {
            key: 3,
            label: (
              <NavLink to="/posts">
                <FontAwesomeIcon icon={faRectangleList}></FontAwesomeIcon><span>Posts</span>
              </NavLink>
            ),
          },
        ]}
      />
      {signstate ? (
        <Button
          type="primary"
          danger
          className={s.header_btn}
          onClick={() => signingOut()}
        >
          <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
        </Button>
      ) : null}
    </Header>
  );
};

export default HeaderMenu;
