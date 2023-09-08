import s from "./posts.module.css";
import { Divider, Card } from "antd";
import axios from "axios";
import { useMemo, useState } from "react";
const metaUrl = import.meta.env.VITE_TEST_VAR;

const Posts = ({ posts }) => {
  let postslet = [];
  const [pagePosts, setpagePosts] = useState([]);
  const getPosts = async () => {
    const { data } = await axios.get(`${metaUrl}posts`);
    console.log(data);
    setpagePosts(data.posts);
  };
  useMemo(() => {
    getPosts();
  }, []);
  if (posts === undefined || null) {
    postslet = pagePosts;
  } else {
    postslet = posts;
  }
  return (
    <div className={s.Posts}>
      <h2>Posts</h2>
      <ul className={s.Posts__inner}>
        {postslet.map((item, index) => {
          const { id, title, body, tags } = item;
          return (
            <li key={id}>
              <Card title={title} bordered={false} className={s.posts__card}>
                {tags.map((tag) => {
                  return <strong>#{tag}, </strong>;
                })}
                <p>{body}</p>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
