import React from "react";
import "./index.css";
import { useNavigate, Link } from "react-router-dom";

const NewPost = ({
  posts,
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
}) => {
  const navigate = useNavigate();
  return (
    <main className="route-components post_main">
      <form
        action=""
        // onSubmit={(event) => handleSubmit(event)}
        className="post_form"
      >
        <label htmlFor="postTitle" className="post_label">
          Title:
        </label>
        <input
          className="post_input"
          type="text"
          required
          value={postTitle}
          placeholder="Enter Title for Post"
          onChange={(event) => setPostTitle(event.target.value)}
        />
        <label htmlFor="postBody" className="post_label">
          Body:
        </label>
        <textarea
          className="post_textarea"
          id="postBody"
          cols="30"
          rows="10"
          required
          placeholder="Description/ Body of the post!"
          value={postBody}
          onChange={(event) => setPostBody(event.target.value)}
        ></textarea>
        <button
          type="submit"
          className="post_button"
          onClick={(event) => {
            handleSubmit(event);
            navigate("/");
          }}
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default NewPost;
