import { Helmet } from "react-helmet-async"
import "./Home.scss"
import { useContext, useEffect, useState } from "react"
import { MainContext } from "../../context/Mainprovider"
import { Link } from "react-router-dom"



function Home() {
  const [product, setproduct] = useState([])
  const {addbasket,addwish}=useContext(MainContext)

  useEffect(() => {
    fetch("http://localhost:3000/product")
    .then(res=>res.json())
    .then(data=>setproduct(data))
  
  }, [])


  return (
    <div>
       <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="home1">
        <div className="photo">

        <img src="https://preview.colorlib.com/theme/shop/img/header-img.png.webp" alt="" />
        </div>
        <div className="yazii">
          <p>Flat 75%Off</p>
          <h1>IT’S HAPPENING</h1>
          <h1> THIS SEASON!</h1> 
          <button>Purchase Now</button>
        </div>
        <div className="text">

        </div>
      </div>
      <div className="home2">
        <div className="textt">

        <h1>Shop for Different Categories</h1>
        <p>Who are in extremely love with eco friendly system.</p>
        </div>

        <div className="cardall">
          <div className="cardleft">
            <div className="cardlefttop">
              <img src="https://preview.colorlib.com/theme/shop/img/c1.jpg.webp" alt="" />
              <img src="https://preview.colorlib.com/theme/shop/img/c2.jpg.webp" alt="" />

            </div>
            <div className="cardleftbottom">
              <img src="https://preview.colorlib.com/theme/shop/img/c3.jpg.webp" alt="" />

            </div>

          </div>
          <div className="cardright">
            <img src="https://preview.colorlib.com/theme/shop/img/c4.jpg.webp" alt="" />



          </div>
          
        </div>
      </div>
      <div className="home3">
        <div className="texttt">

        <h1>New realeased Products for Men</h1>
        <p>Who are in extremely love with eco friendly system.</p>
        </div>

        <div className="cards">
          <div className="card1">

          <img src="https://preview.colorlib.com/theme/shop/img/l1.jpg.webp" alt="" />
          <h3>Long sleeve Shirt</h3>
          <h2>$150</h2>
          </div>
          <div className="card2">

          <img src="https://preview.colorlib.com/theme/shop/img/l2.jpg.webp" alt="" />
          <h3>Long sleeve Shirt</h3>
          <h2>$150</h2>
          </div>
          <div className="card3">

          <img src="https://preview.colorlib.com/theme/shop/img/l3.jpg.webp" alt="" />
          <h3>Long sleeve Shirt</h3>
          <h2>$150</h2>
          </div>
          <div className="card4">

<img src="https://preview.colorlib.com/theme/shop/img/l4.jpg.webp" alt="" />
<h3>Long sleeve Shirt</h3>
<h2>$150</h2>
</div>
        

        </div>
      </div>
      

      <div className="home4">
        <div className="text4">

        <h1>New realeased Products for Women </h1>
        <p>Who are in extremely love with eco friendly system.</p>
        </div>

      <div className="cards">
        {product.map((x)=><div className="card" key={x._id}>
          <Link to={`/Detail/${x._id}`}>
          <img src={x.img} alt="" />
          </Link>
          <h3>{x.name}</h3>
          <h2>${x.price}</h2>
          <button onClick={()=>addbasket(x)}>basket</button>

          <button onClick={()=>addwish(x)}>wish</button>


        </div>)}
      </div>

      </div>
   

    
    </div>
  )
}

export default Home