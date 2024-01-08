import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import PostLists from "./components/PostLists";
import { AppContainer } from "./store/Store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <AppContainer>
      <div className="appContainer">
        <div className="sideSection">
          <Sidebar></Sidebar>
        </div>
        <div className="mainSection">
          <Header className="header"></Header>

          <Outlet />

          <Footer className="footer"></Footer>
        </div>
      </div>
    </AppContainer>
  );
}

export default App;
