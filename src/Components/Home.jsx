import { Row, Col } from "react-bootstrap";
import MainSongContainer from "./MainSongContainer";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar.jsx";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <Row>
              <Col md={12}>
                <MainContainer />
                <MainSongContainer />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
