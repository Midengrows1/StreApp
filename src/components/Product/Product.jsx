import React from "react";
import { Divider } from "antd";
import StarRatings from "react-star-ratings";

import s from "./product.module.css";
const Product = ({ prod }) => {
  const { id, title, brand, images, description, category, price, rating } =
    prod;
  return (
    <li key={id} className={s.product}>
      <div className={s.product__brand}>
        <div className={s.product__brand_image}>
          <img src={images[0]} alt="brand-image" />
        </div>
        <div className={s.product__brand_title}>
          <h3>{title}</h3>
          <span className={s.product__brand_category}>{category}</span>
        </div>
      </div>
      <div className={s.product__description}>
        <p>{description}</p>
        <Divider></Divider>
        <div className={s.product__description_buy}>
          <div>
            <p className={s.product__description_buy_price}>{price}$</p>
            <span>
              {
                <StarRatings
                  className={s.product_rating}
                  rating={rating}
                  starRatedColor="blue"
                  numberOfStars={5}
                  starDimension="10px"
                  name="rating"
                  ignoreInlineStyles={false}
                />
              }
            </span>
          </div>
          <button className={s.product__description_buy_btn}>More</button>
        </div>
      </div>
    </li>
  );
};

export default Product;
