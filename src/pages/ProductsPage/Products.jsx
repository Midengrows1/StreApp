import s from "./products.module.css";
import { useState, useMemo, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import axios from "axios";
import { Product, Sidebar } from "../../components";
import { useSearchParams } from "react-router-dom";
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);
const metaUrl = import.meta.env.VITE_TEST_VAR;
const Products = ({ loading }) => {
  const [searchParams, setsearchParams] = useSearchParams();
  const [productslet, setProductslet] = useState([]);
  const [ctgProducts, setctgProducts] = useState([]);
  const [productsPosts, setproductsPosts] = useState([]);
  const [sortedProducts, setsortedProducts] = useState([]);
  // const searchedProduct = useSearchParams.get('/')
  // Getting  main array from Json data
  const getPosts = async () => {
    const { data } = await axios.get(`${metaUrl}products`);
    // console.log(data);
    setproductsPosts(data.products);
    setProductslet(data.products);
  };
  // Filtered categories from displaying in sidebar
  const filteredCategory = (arr) => {
    const newfilteredArr = arr.map((ctg) => ctg.category);
    const reducearr = Array.from(new Set(newfilteredArr));
    setctgProducts(reducearr);
  };
  // Getting main categories from main json array
  const getCategories = async (ctg) => {
    const { data } = await axios.get(
      `https://dummyjson.com/products/category/${ctg}`
    );
    setproductsPosts(data.products);
    console.log(productslet);
  };
  // Choosing the clicked category
  const setCategory = ({ target: { textContent } }) => {
    console.log(textContent);
    getCategories(textContent);
  };
  const showAll = () => {
    getPosts();
  };
  useMemo(() => {
    getPosts();
  }, []);
  useMemo(() => {
    filteredCategory(productslet);
  }, [productsPosts]);
  return (
    <div className={s.Products}>
      <h2>Products</h2>
      <div className={s.Products__container}>
        <Sidebar
          ctgarr={ctgProducts}
          setCategory={setCategory}
          showAll={showAll}
        ></Sidebar>
        {loading ? (
          <Spin indicator={antIcon} />
        ) : (
          <ul className={s.Products__inner}>
            {productsPosts.map((item, index) => {
              return <Product prod={item} key={index}></Product>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Products;
