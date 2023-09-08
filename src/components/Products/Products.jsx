import s from "./products.module.css";
import { useState, useMemo } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import { Spin } from "antd";
import axios from "axios";
import { Card } from "antd";
const { Meta } = Card;
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);
const metaUrl = import.meta.env.VITE_TEST_VAR;
const Products = ({ products, loading }) => {
  let productslet = [];
  const [productsPosts, setproductsPosts] = useState([]);
  const getPosts = async () => {
    const { data } = await axios.get(`${metaUrl}products`);
    console.log(data);
    setproductsPosts(data.products);
  };
  useMemo(() => {
    getPosts();
  }, []);
  if (products === undefined || null) {
    productslet = productsPosts;
  } else {
    productslet = products;
  }
  return (
    <div className={s.Products}>
      <h2>Products</h2>
      {loading ? (
        <Spin indicator={antIcon} />
      ) : (
        <ul className={s.Products__inner}>
          {productslet.map((item, index) => {
            const {
              id,
              title,
              brand,
              images,
              description,
              category,
              price,
              rating,
            } = item;
            return (
              <li key={id} className={s.product}>
                <div className={s.product__brand}>
                  <div className={s.product__brand_image}>
                    <img src={images[0]} alt="brand-image" />
                  </div>
                  <div className={s.product__brand_title}>
                    <h3>{title}</h3>
                    <span className={s.product__brand_category}>
                      {category}
                    </span>
                  </div>
                </div>
                <div className={s.product__description}>
                  <p>{description}</p>
                  <Divider></Divider>
                  <div className={s.product__description_buy}>
                    <div>
                      <p className={s.product__description_buy_price}>
                        {price}$
                      </p>
                      <p> rating:{rating}</p>
                    </div>
                    <button className={s.product__description_buy_btn}>More</button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Products;
