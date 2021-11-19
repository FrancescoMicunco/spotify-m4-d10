import "./App.css";
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from './Components/Home'
import Artist from "./Components/Artist";
import Album from "./Components/Album";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/album" element={<Album />} />
            <Route path="*" element={<h2>This page doesn't exist</h2>} />
          </Routes>
        </header>{" "}
      </div>
    </BrowserRouter>
  );
}

export default App;
