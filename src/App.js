import { createContext, useState } from "react";
import "./App.css";
import SideBar from "./Components/Home/SideBar";

export const BlogContext = createContext();

function App() {
  const [displayView, setDisplayView] = useState("list-view");
  console.log(displayView);
  return (
    <BlogContext.Provider value={[displayView, setDisplayView]}>
      <div className="blog-page">
        <SideBar></SideBar>
      </div>
    </BlogContext.Provider>
  );
}

export default App;
