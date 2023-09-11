import React from "react";
import s from "./post.module.css";
import { Divider, Card } from "antd";
const Post = ({ post }) => {
  const { title, tags, body } = post;
  return (
    <>
      <li>
        <Card title={title} bordered={false} className={s.posts__card}>
          {tags.map((tag) => {
            return <strong key={tag}>#{tag}, </strong>;
          })}
          <p>{body}</p>
        </Card>
      </li>
    </>
  );
};

export default Post;
