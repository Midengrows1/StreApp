import React, { useEffect, useMemo } from "react";
import { Card, Empty } from "antd";
const { Meta } = Card;
import { useState } from "react";
import s from "./searchpage.module.css";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../components";
const SearchPage = ({ newtype }) => {
  const dispatch = useDispatch();
  const newType = useSelector((state) => state.auth.productType);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchData, setSearchData] = useState(null);
  const searchInput = searchParams.get("q");
  console.log(searchInput);
  const onSearch = async () => {
    const getSearchedData = async (type) => {
      const { data } = await axios.get(
        `https://dummyjson.com/${type}/search?q=${searchInput}`
      );
      setSearchData(data[`${newType}`]);
    };
    getSearchedData(newType);
    
  };

  useEffect(() => {
    if (searchInput.length >= 1) {
      onSearch();
    } else {
      setSearchData(null);
    }
  }, [searchInput, newType]);
  console.log(searchData);
  return (
    <div className={s.searchpage}>
      {!!searchData ? (
        searchData.map((item) => {
          return !!item.images ? (
            <Card
              key={item.id}
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src={item?.images[0]} />}
            >
              <Meta title={item.title} description={item.description} />
            </Card>
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
