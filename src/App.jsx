import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useHistory,
} from "react-router-dom";
function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // const history = useHistory();

  const handleDelete = (id) => {
    const postList = posts.filter((post) => post.id !== id);
    setPosts(postList);
    // history.push("/");
  };
  return (
    <>
      <Router>
        <div className="app_container">
          <Header title="React Js Blogs" />
          <Nav />
          <Routes>
            <Route path="/" element={<Home posts={posts} />} />
            <Route path="/posts" element={<NewPost posts={posts} />} />
            <Route
              path="/post/:id"
              element={<PostPage posts={posts} handleDelete={handleDelete} />}
            />

            <Route path="/about" element={<About />} />
            {/* catch all, for when user is trying to access routes that are not specified!   */}
            <Route path="*" element={<Missing />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
