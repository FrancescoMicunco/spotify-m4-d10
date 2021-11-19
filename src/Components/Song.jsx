import { useState } from "react"

const data =[]
 

const fetchData = async () => {
try{
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/${queryType}/${query}`)
   const res = await res.json()
    console.log(res)
    if(res.ok){
res=data
    }else{alert("Somthing goes wrong during fetching data")
 } }catch(err) {console.log(err)}
 }

useEffect(() => {
    return () => {
        fetchData()
    }
}, [])

const Song =()=>{
    const [state, setState] = useState('')

fetchData("search?=", "queen")
   


return(

)
}

export default Song