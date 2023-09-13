import { useMemo, useState } from "react";
import s from "./home.module.css";
import { Posts } from "../../pages";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Card } from "antd";
const { Meta } = Card;
import StarRatings from "react-star-ratings";
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
    if (!!data.products) {
      setProducts(data.products);
    } else if (!!data.posts) {
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
          <div className={s.home__products}>
            {products.map((item) => {
              const { images, title, price, description, rating } = item;
              return (
                <Card
                  key={item.id}
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt="example" src={images[0]} />}
                >
                  <Meta title={title} description={description} />
                  <Meta
                    title={rating}
                    description={
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
                  />
                </Card>
              );
            })}
          </div>
          <Posts posts={posts}></Posts>
        </div>
      )}
    </div>
  );
};

export default Home;
