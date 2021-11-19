import { Row, Col } from "react-bootstrap";
import MainSongContainer from "./MainSongContainer";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar.jsx";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <Row>
          <MainContainer />
          <MainSongContainer />
         
           
        </Row>
      </div>
    </>
  );
};

export default Home;
