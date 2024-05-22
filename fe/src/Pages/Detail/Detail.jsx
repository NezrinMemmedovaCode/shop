import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom"

function Detail() {
  const {id}=useParams()
  const [detail, setdetail] = useState([])
 


  useEffect(() => {
    
    fetch(`http://localhost:3000/product/${id}`)
    .then(res=>res.json())
    .then(data=>setdetail(data))
    .catch(data=>setdetail(data))
  }, [])




  return (
    <div>
      <Helmet>
        <title>Detail</title>
      </Helmet>


      <div className="cards">
        
          <img src={detail.img} alt="" />
          <h3>{detail.name}</h3>
          <h2>${detail.price}</h2>
          

        


      
      </div>
    </div>
  )
}

export default Detail