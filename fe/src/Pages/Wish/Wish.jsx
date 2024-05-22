import { useContext } from "react"
import { Helmet } from "react-helmet-async"
import { MainContext } from "../../context/Mainprovider"

function Wish() {
  const {wish,deletewish}=useContext(MainContext)
  return (
    <div>
       <Helmet>
        <title>Wish</title>
      </Helmet>


      
      <div className="cards">
        {wish.map((x)=><div key={x.id}>
          <img src={x.img} alt="" />
          <h3>{x.name}</h3>
          <h2>${x.price}</h2>
          <button onClick={()=>deletewish(x)}>delete</button>

        


        </div>)}
      </div>
    </div>
  )
}

export default Wish