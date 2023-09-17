import React from "react";
import { Divider, Button } from "antd";
import StarRatings from "react-star-ratings";
import { Link, useNavigate } from "react-router-dom";
import s from "./product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addCart, openDrawer } from "../../store/authSlice";
const Product = ({ prod }) => {
  const { id, title, brand, images, description, category, price, rating } =
    prod;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const purchaseItem = () => {
    // alert(123);
    dispatch(addCart(prod));
    dispatch(openDrawer());
  };
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
          <div className={s.product__buy}>
            <Link to={`/products/${id}`}>
              <Button type="primary">More</Button>
            </Link>
            <Button type="default" onClick={() => purchaseItem()}>
              Buy
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Product;
