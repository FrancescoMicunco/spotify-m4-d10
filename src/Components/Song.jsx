import { useState, useEffect } from "react"
import { Card} from 'react-bootstrap'

let dataSong=[]
 
// 
const fetchData = async (queryType, query) => {
try{const res = await fetch(
  `https://striveschool-api.herokuapp.com/api/deezer/${queryType}/${query} `
);
   if(res.ok){
const data = await res.json()
console.log(data)
dataSong= data
console.log(dataSong)
    }else{alert("Something goes wrong during fetching data")
 } }catch(err) {console.log(err)}
 }


const Song =()=>{
    const [state, setState] = useState('')
    

    useEffect(() => {
      
        fetchData("artist", 441);
        
        
      
    }, []);




return (
  <Card>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title className="text-dark">{state}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
);
}

export default Song