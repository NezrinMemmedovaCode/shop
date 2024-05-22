import { useContext } from "react"
import { Helmet } from "react-helmet-async"
import { MainContext } from "../../context/Mainprovider"

function Basket() {
  const {basket,deletebasket}=useContext(MainContext)
  return (
    <div>
      
      <Helmet>
        <title>Basket</title>
      </Helmet>
      <div className="cards">
        {basket.map((x)=><div key={x.id}>
          <img src={x.img} alt="" />
          <h3>{x.name}</h3>
          <h2>${x.price}</h2>
          <button onClick={()=>deletebasket(x)}>delete</button>

        


        </div>)}
      </div>
     
    </div>
  )
}

export default Basket