import { useState } from "react"

const data =[]
 


const fetchData = async () => {

    fetch(`https://striveschool-api.herokuapp.com/api/deezer/${queryType}/${query}`)
 try{

    const res = await res.json()
    console.log(res)
    if(res.ok){
res=data
    }else{alert("Somthing goes wrong during fetching data")
 }   

    }
    catch(err) {console.log(err)}
 }

const Song =()=>{
    const [state, setState] = useState('')


   
}



return(


)


}

export default Song