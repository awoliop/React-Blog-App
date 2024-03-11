import React from "react";
import Post from "./Post";
const Feed = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </>
  );
};

export default Feed;
