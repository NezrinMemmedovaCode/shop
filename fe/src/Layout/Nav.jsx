import { useContext } from "react"
import { Link } from "react-router-dom"
import { MainContext } from "../context/Mainprovider"
import "./Nav.scss"

function Nav() {
  const {basket}=useContext(MainContext)
  return (

    
    <div className="nav">
      <div className="basliq">
        <img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="" />
      </div>
      <div className="links">

        <Link to={"/"}>Home</Link>
        <Link to={"/Basket"}>Basket {basket.length}</Link>
        <Link to={"/Wish"}>Wish</Link>
        
        <Link to={"/Admin"}>Admin</Link>
        <Link to={"/Add"}>Add</Link>
      </div>
      <div className="menu">
      <i className="fa-solid fa-bars"></i>
      </div>



    </div>
  )
}

export default Nav