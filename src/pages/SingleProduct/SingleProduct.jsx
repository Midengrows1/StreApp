import React from "react";
import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Button, Drawer } from "antd";
const { Meta } = Card;
import s from "./singleproduct.module.css";
import axios from "axios";
import StarRatings from "react-star-ratings";
import { addCart } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { openDrawer } from "../../store/authSlice";
const SingleProduct = () => {
  const [product, setProduct] = useState([null]);
  const open = useSelector((state) => state.auth.drawerOpen);
  const navigate = useNavigate();
  const { id } = useParams();
  const goBack = () => navigate(-1);
  const dispatch = useDispatch();
  const purchasedProduct = useSelector((state) => state.auth.cart);
  const getProductData = async (id) => {
    const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
    console.log(data);
    setProduct(data);
  };
  const buyProduct = (product) => {
    // setOpen(true);
    dispatch(addCart(product));
    dispatch(openDrawer());
    console.log(purchasedProduct[0].title);
  };

  const { title, brand, images, description, price, rating } = product;
  useEffect(() => {
    getProductData(id);
  }, [id]);
  return (
    <>
      {product && (
        <div className="hello">
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={""} />}
          >
            <Meta title={title} description={description} />
            <div className={s.singleproduct__rating}>
              <p>{rating}</p>
              <span>
                {
                  <StarRatings
                    className={s.product_rating}
                    rating={rating}
                    starRatedColor="blue"
                    numberOfStars={5}
                    starDimension="20px"
                    name="rating"
                    ignoreInlineStyles={false}
                  />
                }
              </span>
            </div>
            <Button
              className={s.singleproduct__purchase}
              onClick={(id) => buyProduct(product)}
            >
              Buy
            </Button>
          </Card>
          <Drawer
            title="Basic Drawer"
            placement="right"
            onClose={() => dispatch(openDrawer())}
            open={open}
          >
            {purchasedProduct.map((item, index) => {
              return <p key={id}>{item.title}</p>;
            })}
          </Drawer>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
