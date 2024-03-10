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
// import { Outlet, Router } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
      errorElement: <Missing />,
    },
    {
      path: "/posts",
      element: <NewPost />,
      errorElement: <Missing />,
    },
    {
      path: "/postPage",
      element: <PostPage />,
      errorElement: <Missing />,
    },
    {
      path: "/about",
      element: <About />,
      errorElement: <Missing />,
    },
  ]);
  return (
    <>
      <div className="app_continer">
        <Header />
        <Nav />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </>
  );
}

export default App;
