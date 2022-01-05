import { createContext, useState } from "react";
import "./App.css";
import SideBar from "./Components/Home/SideBar";

export const BlogContext = createContext();

function App() {
  const [displayView, setDisplayView] = useState();
  return (
    <BlogContext.Provider
      value={[displayView, setDisplayView]}
      className="blog-page"
    >
      <SideBar></SideBar>
    </BlogContext.Provider>
  );
}

export default App;
