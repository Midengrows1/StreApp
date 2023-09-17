import React, { useEffect, useMemo } from "react";
import { Card, Empty } from "antd";
const { Meta } = Card;
import { useState } from "react";
import s from "./searchpage.module.css";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Post, Product } from "../../components";
const SearchPage = () => {
  const selectedState = useSelector((state) => state.auth.productType);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchData, setSearchData] = useState([]);
  const searchInput = searchParams.get("q");
  const searchType = searchParams.get("type");
  const onSearch = async () => {
    const getSearchedData = async (type) => {
      const { data } = await axios.get(
        `https://dummyjson.com/${type}/search?q=${searchInput}`
      );
      setSearchData(data[`${selectedState}`]);
    };
    getSearchedData(selectedState || searchType);
  };
  useEffect(() => {
    if (searchInput.length >= 1) {
      onSearch();
    } else {
      setSearchData([]);
    }
  }, [searchInput, selectedState, searchType]);
  return (
    <div className={s.searchpage}>
      {searchData.length > 0 ? (
        searchData.map((item) => {
          return !!item.images ? (
            <Product prod={item} key={item.id}></Product>
          ) : (
            <Post key={item.id} post={item}></Post>
          );
        })
      ) : (
        <div className={s.empty_data}>
          <Empty />
        </div>
      )}
    </div>
  );
};

export default SearchPage;
