import s from "./header.module.css";
import { AudioOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, Input, Select, Avatar, Badge } from "antd";
const { Search } = Input;
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleChangeType, openDrawer } from "../../store/authSlice";
import {
  faRightToBracket,
  faHouse,
  faStore,
  faRectangleList,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
const { Header } = Layout;
import { signOut } from "../../store/authSlice";
import SearchPage from "../../pages/SearchPage/SearchPage";
import { useEffect, useMemo, useState } from "react";
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
  const [selectedType, setSelectedType] = useState("products");
  const [searchedItem, setSearchedItem] = useState("");
  const purchasedProduct = useSelector((state) => state.auth.cart);
  const [count, setCount] = useState(5);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signstate = useSelector((state) => state.auth.signState);
  const increase = () => {
    setCount(count + 1);
  };
  const decline = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  };
  const signingOut = () => {
    dispatch(signOut());
    navigate("/auth");
  };
  const onSearch = (value) => {
    setSearchedItem(value);
    navigate(`search?q=${value}&type=${selectedType}`);
  };
  const handleChange = (value) => {
    setSelectedType(value);
    onSearch(searchedItem);
    dispatch(handleChangeType(value));
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
          onChange={(e) => handleChange(e)}
          options={options}
        />
      </div>
      <Badge
        count={purchasedProduct.length}
        overflowCount={99}
        onClick={() => dispatch(openDrawer())}
      >
        <Avatar shape="square" size="large" className={s.header__cart}>
          <FontAwesomeIcon
            icon={faCartShopping}
            className={s.cart_shopping}
          ></FontAwesomeIcon>
        </Avatar>
      </Badge>
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
