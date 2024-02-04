import React, { useEffect, useState } from "react";

import "./BlogPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import CodeViewer from "../code-viewer/CodeViewer";

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [content, setContent] = useState([]);
  useEffect(()=>{
    axios.get("/blogs/"+id).then(
        res => {
            setBlog(res.data.data)
            setContent(res.data.data.blogContent)
        }
    ).catch(
        ()=> console.log("Something went wrong")
    )
  },[id])
  return (
    <div className="blog">
      <div className="blog-container">
        <h1 className="blog-main-title">{blog.blogTitle}</h1>
        <div className="blog-sub-title">{blog.description}</div>
        <div className="blog-content">
            {content.map((item)=>{
                if(item.title==="heading"){
                    return <h3 className="blog-content-heading">{item.content}</h3>
                }
                if(item.title==="para"){
                    return <div className="blog-content-para">{item.content}</div>
                }
                if(item.title==="code"){
                    return <CodeViewer code={item.content} />
                }
                return null;
            })}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
