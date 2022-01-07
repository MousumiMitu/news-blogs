import { createContext, useEffect, useState } from "react";
import "./App.css";
import BlogNews from "./Components/Home/BlogNews";
import Modal from "./Components/Home/Modal";
import SideBar from "./Components/Home/SideBar";

export const BlogContext = createContext();

function App() {
  const [displayView, setDisplayView] = useState("list-view");
  const [blogData, setBlogData] = useState([]);
  const [modalNews, setModalNews] = useState({});
  const [clickModal, setClickModal] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setBlogData(data.slice(0, 40)));
  }, []);

  const handleDlt = (id) => {
    const newData = blogData.filter((bd) => bd.id !== id);
    setBlogData(newData);
  };

  const handleViewModal = (id) => {
    const findData = blogData.find((data) => data.id === id);
    setClickModal(true);
    setModalNews(findData);
  };

  const handleModalClose = () => {
    setClickModal(false);
  };

  return (
    <BlogContext.Provider value={[displayView, setDisplayView]}>
      <main className="blog-page d-flex justify-content-between">
        <Modal
          modalNews={modalNews}
          clickModal={clickModal}
          handleModalClose={handleModalClose}
        />
        <SideBar />
        <BlogNews
          handleDlt={handleDlt}
          blogData={blogData}
          handleViewModal={handleViewModal}
        />
      </main>
    </BlogContext.Provider>
  );
}

export default App;
