import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./index.css";

const EditPost = ({
  posts,
  handEdit,
  editTitle,
  setEditTitle,
  editBody,
  setEditBody,
}) => {
  //⬇️⬇️⬇️
  // Install the Axios Library and this Should be fine!!
  //⬆️⬆️⬆️
  const navigate = useNavigate("");
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main className="route-components post_main">
      {editTitle && (
        <form
          action=""
          onSubmit={(e) => e.preventDefault()}
          className="post_form"
        >
          <label htmlFor="editTitle" className="post_label">
            Edit Title:
          </label>
          <input
            className="post_input"
            id="editTitle"
            type="text"
            required
            value={editTitle}
            onChange={(event) => {
              setEditTitle(event.target.value);
            }}
          />
          <label htmlFor="editBody" className="post_label">
            Edit Body:
          </label>
          <textarea
            className="post_textarea"
            id="editBody"
            cols="30"
            rows="10"
            required
            value={editBody}
            onChange={(event) => setEditBody(event.target.value)}
          ></textarea>
          <button
            type="submit"
            className="post_button"
            onClick={(event) => {
              handEdit(post.id);
              navigate("/");
            }}
          >
            Submit
          </button>
        </form>
      )}
      {!editTitle && (
        <div className="editpost_notFound">
          <h1>Post Not Found??</h1>
          <p>well that is disappointing!</p>
          <p>
            <Link to="/">visit our homePage!</Link>
          </p>
        </div>
      )}
    </main>
  );
};

export default EditPost;
