import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Post = ({ post }) => {
  return (
    <article>
      <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.datetime}</p>
        <p>
          {post.body.length <= 25 ? post.body : `${post.body.slice(0, 40)}...`}
        </p>
      </Link>
    </article>
  );
};

export default Post;
