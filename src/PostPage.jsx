import { useParams, Link, useNavigate } from "react-router-dom";
import "./index.css";
const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  // the useNavigate Hook may be used only in context of router !!
  let navigate = useNavigate();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <main className="">
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.datetime}</p>
          <p>{post.body}</p>
          <Link to={`/edit/${post.id}`}>
            <button className="go_back_button">Edit</button>
          </Link>
          <button
            className="delete_button"
            y
            onClick={() => {
              handleDelete(post.id);
              navigate("/");
            }}
          >
            Delete
          </button>
          <div>
            <Link to="/">
              <button className="go_back_button">{`< Go back`}</button>
            </Link>
          </div>
        </>
      )}
      {!post && (
        <>
          <h1>Post Not Found</h1>
          <p>well that is disappointing!</p>
          <p>
            <Link to="/">visit our homePage!</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default PostPage;
