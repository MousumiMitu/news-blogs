import React, { useEffect, useState } from "react";
import "./BlogNews.css";

const BlogNews = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setBlogData(data));
  }, []);

  const sliceData = blogData.slice(1, 6);
  return (
    <section className="blog-section">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ex cum fuga
        perferendis cupiditate, iure laborum iusto animi dolorum optio error vel
        labore. Facere eius adipisci ipsa commodi aperiam voluptatem.
      </p>
      <h2>{sliceData.title}</h2>
    </section>
  );
};

export default BlogNews;
