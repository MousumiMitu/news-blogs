import React, { useContext, useEffect, useState } from "react";
import "./BlogNews.css";
import img1 from "../../images/lauren-mancke-aOC7TSLb1o8-unsplash.jpg";
import img2 from "../../images/img1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { BlogContext } from "../../App";

const BlogNews = () => {
  const [displayView, setDisplayView] = useContext(BlogContext);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setBlogData(data));
  }, []);

  // const sliceDa = blogData.slice(0, 10);

  return (
    <section className="blog-section">
      {displayView === "list-view" ? (
        <div className="blog-news-list ">
          {blogData.map((data) => (
            <div className="">
              <div className="row mb-3 ">
                <div className="col-11  p-3 blog-list-data shadow">
                  <div className="row ">
                    <div className="col-2 m-auto text-center ">
                      {" "}
                      <img src={img1} className=" w-75 rounded-circle" alt="" />
                    </div>
                    <div className="col-10 ">
                      <h5>{data.title}</h5>
                      <p>{data.body}</p>
                      <small>Monday, 21 dec 2021 14:40 GMT</small>
                    </div>
                  </div>
                </div>
                <div className="col-1  close-btn m-auto text-center ">
                  <div className=" p-3 rounded-circle text-danger  bg-white shadow">
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="blog-news-grid">
          {blogData.map((data) => (
            <div className="grid-data p-2">
              <div className="text-danger cls-btn">
                <FontAwesomeIcon icon={faTimes} size="lg" className="" />
              </div>
              <div>
                <h6>{data.title}</h6>
                <small>{data.body}</small>
                <small>Monday, 21 dec 2021 14:40 GMT</small>
              </div>
              <div className="pt-2">
                <img src={img2} className="img-fluid" alt="" />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default BlogNews;
