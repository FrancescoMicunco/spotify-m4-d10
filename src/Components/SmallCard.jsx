import { Card } from "react-bootstrap";
import pic1 from "../assets/cards/1.jpg";


const SmallCard = ({title}) => {
 return (
    <Card className="ml-2 mt-3">
      <div className="d-flex">
        <div>
          <Card.Img variant="top" src={pic1} />
        </div>
        <div>
          <Card.Body className="text-dark">
            <Card.Title>{title}</Card.Title>
            <Card.Text className="text-dark">Some quick</Card.Text>
          </Card.Body>
        </div>
      </div>
    </Card>
 )
};

export default SmallCard;
