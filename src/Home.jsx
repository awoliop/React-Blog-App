import React from "react";
import "./index.css";
import Feed from "./Feed";

const Home = ({ posts, isLoading, FetchError }) => {
  return (
    <main className="Home">
      {isLoading && <p>Loading Posts...</p>}
      {FetchError && !isLoading && <p style={{ color: "red" }}>{FetchError}</p>}
      {!FetchError &&
        !isLoading &&
        (posts.length ? (
          <Feed posts={posts} />
        ) : (
          <p style={{ marginTop: "2rem" }}>No post to display</p>
        ))}
    </main>
  );
};

export default Home;
