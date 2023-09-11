import React, { useEffect, useMemo } from "react";
import { Card } from "antd";
const { Meta } = Card;
import { useState } from "react";
import s from "./searchpage.module.css";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchData, setSearchData] = useState([]);
  const searchInput = searchParams.get("q");
  const getSearchedData = async (type) => {
    const { data } = await axios.get(
      `https://dummyjson.com/products/search?q=${searchInput}`
    );
    console.log(data.products);
    setSearchData(data.products);
  };
  useEffect(() => {
    getSearchedData();
  }, [searchInput]);
  return (
    <div className={s.searchpage}>
      {searchData &&
        searchData.map((item) => {
          return (
            <Card
              key={item.id}
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src={item.images[0]} />}
            >
              <Meta title={item.title} description={item.description} />
            </Card>
          );
        })}
    </div>
  );
};

export default SearchPage;
