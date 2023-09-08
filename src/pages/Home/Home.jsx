import React, { useEffect, useMemo, useState } from "react";
import s from "./home.module.css";
import { Posts, Products } from "../../components";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import axios from "axios";
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);
const metaUrl = import.meta.env.VITE_TEST_VAR;
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [products, setProducts] = useState([]);

  const getRequets = async (url) => {
    const { data } = await axios.get(url);
    if (data.products) {
      setProducts(data.products);
    } else if (data.posts) {
      setPosts(data.posts);
    }
  };
  useMemo(() => {
    setTimeout(() => {
      setLoading(false);
      getRequets(`${metaUrl}products?limit=6`);
      getRequets(`${metaUrl}posts?limit=6`);
    }, 1000);
  }, []);
  return (
    <div className={s.Home}>
      {loading ? (
        <Spin indicator={antIcon} />
      ) : (
        <div className={s.Home__header}>
          <Products products={products} loading={loading}></Products>
          <Posts posts={posts} loading={loading}></Posts>
        </div>
      )}
    </div>
  );
};

export default Home;
