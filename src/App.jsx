import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <div className="App">
        <header className="App-header"></header>{" "}
      </div>
    </BrowserRouter>
  );
}

export default App;
