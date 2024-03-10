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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div className="app_continer">
          <Header />
          <Nav />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/posts" element={<NewPost />} />
            <Route path="/postPage" element={<PostPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Missing />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
