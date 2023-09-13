import s from "./header.module.css";
import { AudioOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, Input, Select } from "antd";
const { Search } = Input;
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faHouse,
  faStore,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";
const { Header } = Layout;
import { signOut, handleChange } from "../../store/authSlice";
import SearchPage from "../../pages/SearchPage/SearchPage";
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const options = [
  {
    value: "products",
    label: "Products",
  },
  {
    value: "posts",
    label: "Posts",
  },
];
const HeaderMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signstate = useSelector((state) => state.auth.signState);
  const signingOut = () => {
    dispatch(signOut());
    navigate("/auth");
  };
  const onSearch = (value) => {
    console.log(value);
    navigate(`/search?q=${value}`);
  };
  return (
    <Header className={s.header}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        className={s.header_nav}
        items={[
          {
            key: 1,
            label: (
              <NavLink to="/">
                <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                <span>Home</span>
              </NavLink>
            ),
          },
          {
            key: 2,
            label: (
              <NavLink to="/products">
                <FontAwesomeIcon icon={faStore}></FontAwesomeIcon>
                <span>Products</span>
              </NavLink>
            ),
          },
          {
            key: 3,
            label: (
              <NavLink to="/posts">
                <FontAwesomeIcon icon={faRectangleList}></FontAwesomeIcon>
                <span>Posts</span>
              </NavLink>
            ),
          },
        ]}
      />
      <div className={s.search_navigation}>
        <Search
          style={{ width: 300 }}
          placeholder="input search text"
          onSearch={(e) => onSearch(e)}
          enterButton
          allowClear
          size="medium"
        />
        <Select
          defaultValue="products"
          style={{
            width: 120,
          }}
          onChange={(e) => dispatch(handleChange(e))}
          options={options}
        />
      </div>
      {signstate ? (
        <Link to="/logout">
          <Button
            type="primary"
            danger
            className={s.header_btn}
            onClick={() => signingOut()}
          >
            <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
          </Button>
        </Link>
      ) : null}
    </Header>
  );
};

export default HeaderMenu;
