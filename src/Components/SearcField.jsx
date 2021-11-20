import {InputGroup, FormControl} from 'react-bootstrap'

const SearchField =(props)=>{

return (
<InputGroup className="mb-3">
  <InputGroup.Text
    type="text"
    classname="dorm-control bg-dark text-white"
  ></InputGroup.Text>
  <FormControl placeholder="Songs, Artists, Albums" 
  onChange={(e)=>props.setSearchedType(e.target.value)}/>
</InputGroup>

)
}

export default SearchField