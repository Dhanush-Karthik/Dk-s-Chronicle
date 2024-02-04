import React, { useEffect, useState } from "react";

import "./Blogs.css";
import img from "../../images/thumbnail.jpeg";
import axios from "axios";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("/blogs")
      .then((res) => {
        setBlogs(res.data.data);
        console.log(blogs[0].blogTitle);
      })
      .catch(() => console.log("Something went wrong"));
  }, []);

  return (
    <div className="blog">
      <div className="blog-container">
        <div className="blog-title">BLOGS</div>
        <div className="blog-tile-container">
          {blogs.map((blog) => {
            return (
              <div className="blog-tile">
                <img src={img} alt="thumbail" />
                <div className="blog-topic-title">{blog.blogTitle}</div>
                <div className="blog-description ellipsis">{blog.description}</div>
                <div className="blog-button"><Link to={blog.blogModelId}>Read</Link></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
