import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import "./App.css";
import "./index.css";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import EditPost from "./EditPost";
import useWindowSize from "./hooks/useWindowSize";
import useAxiosFetch from "./hooks/useAxiosFetch";

function App() {
  const API_URL = "http://localhost:3500";
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  // destructured to be used as the return from the custom hook is an object of width and height as properties!!
  const { width } = useWindowSize();
  const { data, isLoading, FetchError } = useAxiosFetch(
    "http://localhost:3500"
  );

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       // with axios fetching(we don't have to convert the fetched data to json format!, or manually catch errors!!, axios will do that for us!! )
  //       const response = await axios.get(`${API_URL}/posts`);
  //       setPosts(response.data);
  //     } catch (error) {
  //       if (error.response) {
  //         // if error is not in the 200(OK) range!! (we can log the following depending what you are working with!!)
  //         console.log(error.response.data.message);
  //         console.log(error.response.status);
  //         console.log(error.response.headers);
  //       } else {
  //         console.log(`error: ${error.message}`);
  //       }
  //     }
  //   };
  //   fetchPosts();
  // }, []);

  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    const filteredResult = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResult(filteredResult.reverse());
  }, [posts, search]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    let datetime = new Date();
    datetime = datetime.toString();

    const newPost = {
      id: `${id}`,
      title: postTitle,
      datetime: datetime,
      body: postBody,
    };
    try {
      // we need to update our database with axios as well!!

      // POST METHOD
      const response = await axios.post(`${API_URL}/posts`, newPost);
      // we are changing the commented out line with its next line so that our frontend will be in sync with the database!!(its worth noting that the api return for post method is the newly updated data!!)
      // const newPosts = [...posts, newPost];
      const newPosts = [...posts, response.data];
      setPosts(newPosts);
      setPostTitle("");
      setPostBody("");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      //DELETE METHOD!
      axios.delete(`${API_URL}/posts/${id}`);
      const postList = posts.filter((post) => post.id !== id);
      setPosts(postList);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handEdit = async (id) => {
    let datetime = new Date();
    datetime = datetime.toString();
    const updatedPost = {
      id: `${id}`,
      title: editTitle,
      datetime: datetime,
      body: editBody,
    };

    try {
      const response = await axios.put(`${API_URL}/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id == id ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditBody("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Router>
        <div className="app_container">
          <Header title="React Js Blogs" width={width} />
          <Nav search={search} setSearch={setSearch} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home posts={searchResult} />} />
              <Route
                path="/posts"
                element={
                  <NewPost
                    posts={posts}
                    postTitle={postTitle}
                    setPostTitle={setPostTitle}
                    postBody={postBody}
                    setPostBody={setPostBody}
                    handleSubmit={handleSubmit}
                  />
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <EditPost
                    posts={posts}
                    editTitle={editTitle}
                    setEditTitle={setEditTitle}
                    editBody={editBody}
                    setEditBody={setEditBody}
                    handEdit={handEdit}
                  />
                }
              />
              <Route
                path="/post/:id"
                element={<PostPage posts={posts} handleDelete={handleDelete} />}
              />

              <Route path="/about" element={<About />} />
              {/* catch all, for when user is trying to access routes that are not specified!   */}
              <Route path="*" element={<Missing />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

//⬇️⬇️⬇️
// Install the Axios Library and this Should be fine!!
//⬆️⬆️⬆️
