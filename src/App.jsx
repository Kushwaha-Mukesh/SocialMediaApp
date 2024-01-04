import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import PostLists from "./components/PostLists";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState("Home");
  return (
    <div className="appContainer">
      <div className="sideSection">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar}></Sidebar>
      </div>
      <div className="mainSection">
        <Header className="header"></Header>
        {sidebar === "Home" && <PostLists></PostLists>}
        {sidebar === "CreatePost" && <CreatePost></CreatePost>}
        <Footer className="footer"></Footer>
      </div>
    </div>
  );
}

export default App;
