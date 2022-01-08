import React, { useContext, useEffect, useState } from "react";
import "./BlogNews.css";
import img1 from "../../images/lauren-mancke-aOC7TSLb1o8-unsplash.jpg";
import img2 from "../../images/img1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { BlogContext } from "../../App";

const BlogNews = ({ handleDlt, blogData, handleViewModal }) => {
  const [displayView, setDisplayView] = useContext(BlogContext);

  const [latestPage, setLatestPage] = useState(1);
  const [PerPageData] = useState(9);

  const blogPages = [];
  for (let i = 1; i <= Math.ceil(blogData.length / PerPageData); i++) {
    blogPages.push(i);
  }
  const handlePagination = (e) => {
    setLatestPage(Number(e.target.id));
  };
  const pageNumber = blogPages.map((number) => {
    return (
      <li
        key={number}
        id={number}
        onClick={handlePagination}
        className={latestPage === number ? "active-page" : null}
      >
        {number}
      </li>
    );
  });

  const lastDataIndex = latestPage * PerPageData;
  const firstDataIndex = lastDataIndex - PerPageData;
  const currentData = blogData.slice(firstDataIndex, lastDataIndex);

  const handlePrev = () => {
    setLatestPage(latestPage - 1);
  };
  const handleNext = () => {
    setLatestPage(latestPage + 1);
  };

  return (
    <section className="blog-section pt-4">
      {displayView === "list-view" ? (
        <div className="blog-news-list ">
          {currentData.map((data) => (
            <div className="mx-auto">
              <div className="row mb-3 ">
                <div
                  className="col-11  p-3 blog-list-data shadow"
                  onClick={() => handleViewModal(data.id)}
                >
                  <div className="row ">
                    <div className="col-2 m-auto text-center ">
                      {" "}
                      <img src={img1} className=" w-50 rounded-circle" alt="" />
                    </div>
                    <div className="col-10 ">
                      <h6>{data.title}</h6>
                      <p>{data.body.substr(0, 90)}</p>
                      <small>Monday, 21 dec 2021 14:40 GMT</small>
                    </div>
                  </div>
                </div>
                <div className="col-1  close-btn m-auto text-center ">
                  <div
                    className=" p-3 rounded-circle text-danger  bg-white shadow"
                    onClick={() => handleDlt(data.id)}
                  >
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="blog-news-grid">
          {currentData.map((data) => (
            <div className="grid-data p-2">
              <div
                className="text-danger cls-btn"
                onClick={() => handleDlt(data.id)}
              >
                <FontAwesomeIcon icon={faTimes} size="lg" className="" />
              </div>
              <div className="div" onClick={() => handleViewModal(data.id)}>
                <div className="grid-desc">
                  <h5>{data.title.slice(0, 22) + ".."}</h5>
                  <p>{data.body.slice(0, 35) + ".."}</p>
                  <small>Monday, 21 dec 2021 14:40 GMT</small>
                </div>
                <div className="pt-2">
                  <img src={img2} className="img-fluid " alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="itemPagination text-center mt-3">
        <ul>
          <li>
            <button
              onClick={handlePrev}
              disabled={latestPage === blogPages[0] ? true : false}
            >
              Prev
            </button>
          </li>
          {pageNumber}
          <li>
            <button
              onClick={handleNext}
              disabled={latestPage === blogPages.length ? true : false}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BlogNews;
