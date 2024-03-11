import { useParams, Link } from "react-router-dom";
import "./index.css";
const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <main className="">
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.datetime}</p>
          <p>{post.body}</p>
          <button
            className="delete_button"
            onClick={() => handleDelete(post.id)}
          >
            Delete
          </button>
          {/* <div>
            <Link to="/">
              <button className="go_back_button">{`< Go back`}</button>
            </Link>
          </div> */}
        </>
      )}
      {!post && (
        <>
          <h1>Not Found</h1>
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
