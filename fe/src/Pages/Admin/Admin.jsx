import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import "./Admin.scss"

function Admin() {
  const [admin, setadmin] = useState([])
  const [search, setsearch] = useState("")

  function show(params) {
    search.sort((a,b) => (a[params] > b[params]) ? 1 : ((b[params] > a[params]) ? -1 : 0))
    
  }








  useEffect(() => {
    fetch("http://localhost:3000/product")
    .then(res=>res.json())
    .then(data=>setadmin(data))
  }, [])

  function deleteadmin(id) {
    fetch("http://localhost:3000/product/" +id ,{
      method:"delete"
    })
    .then(res=>res.json())
    .then(data=>setadmin([...admin.filter((x)=>x._id!==data._id)]))




    
  }
  return (
    <div>
      <Helmet>
        <title>Admin</title>
      </Helmet>

      <div className="admin">

      <button onClick={()=>show("name")}>a-z</button>
      <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)} />

     <table>

      <tr>
        <th>image</th>
        <th>name</th>
        <th>price</th>
        <th>options</th>
      </tr>
      
        {admin
        .filter((x)=>x.name.toLowerCase().includes((search.toLocaleLowerCase())))
        .map((x)=><tr key={x.id}>
          <td><img src={x.img} alt="" /></td>
          <td>{x.name}</td>
          <td>{x.price}</td>
          <td><button onClick={()=>deleteadmin(x._id)}>delete</button></td>

        </tr>)}
     </table>
     



    </div>
      </div>
  )
}

export default Admin