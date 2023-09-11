import s from "./posts.module.css";
import axios from "axios";
import { useMemo, useState } from "react";
const metaUrl = import.meta.env.VITE_TEST_VAR;
import { Post } from "../../components";
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
          return <Post post={item} key={index}></Post>;
        })}
      </ul>
    </div>
  );
};

export default Posts;
