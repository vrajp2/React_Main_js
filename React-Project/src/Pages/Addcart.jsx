// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// function Addcart() {

//   const [data,setdata]=useState([])

//   const Getdata=()=>{
//     axios.get("http://localhost:8080/cart")
//     .then((res)=>setdata(res.data))
//     .catch((err)=>console.log(err))

//   }

// useEffect(()=>{
//   Getdata()
// },[])

//   return (
//     <div>

//     {data.map((e)=>(
//       <div key={e.id}>
//                   <img src={e.image} alt={e.title} className="card-img-top img-fluid" style={{ maxHeight: "300px", objectFit: "cover" }} />

//         <p>Price:{e.price}</p>
//         <p>Category:{e.category}</p>
//       </div>
      
//     ))}
    
//     </div>
//   )
// }

// export default Addcart

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Addcart() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get("http://localhost:8080/cart")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }
 

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {data.map((e) => (
          <div key={e.id} className="col-md-4 mb-4">
            <div className="card" style={{marginLeft:"50%"}}>
              <img src={e.image} alt={e.title} className="card-img-top img-fluid" style={{ maxHeight: "300px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title">{e.title}</h5>
                <p className="card-text">Price: {e.price}</p>
                <p className="card-text">Category: {e.category}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Addcart;
