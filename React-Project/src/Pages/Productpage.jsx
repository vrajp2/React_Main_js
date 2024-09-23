import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';  
import mainlogo from "../assets/Image/mainlogo.png";

export const Productpage = () => {
  const [products, setProducts] = useState([]);
  const [page, setpage] = useState(1);
  const [filter, setfilter] = useState(null);
  const [sort, setsort] = useState("");
  const [search, setsearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/Product",
      {
        params: {
          category: filter,
          _page: page,
          _limit: "20",
          _sort: "price",
          _order: sort,
          q: search,
        },
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [products, filter, sort, page, search]);

  const searchOperation = (e) => {
    setTimeout(() => {
      setsearch(e.target.value);
    }, 2000);
  };

  const resetAll = () => {
    setpage(1);
    setsort('');
    setfilter(null);
    setsearch('');
    alert('Reset All Filters');
  };

  return (
    <>
    <div className="container mt-4">
      <div className="row mb-3">
        <div className="col-md-6 mb-3">
          <input  
            type="text"
            className="form-control"
            placeholder="Search Goods..."
            onChange={(e) => searchOperation(e)}
          />
        </div>
        <div className="col-md-4 mb-3">
          <select className="form-select" onChange={(e) => setfilter(e.target.value)}>
            <option value="">Select Your choice.</option>
            <option value="new">New</option>
            <option value="back in stock">Back in Stock</option>
            <option value="best seller">Best Seller</option>
            <option value="best electronic">Best Electronic</option>
          </select>
        </div>
        <div className="col-md-2">
          <button className="btn btn-danger w-100" onClick={resetAll}>Reset</button>
        </div>
       <div className="col-md-2">
       <Link to={'/AddProduct'}> <button className="btn btn-danger w-100" >Add Product</button></Link>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-5">
        {products.map((el) => (
          <div key={el.id} className="col">
            <div className="card h-100 shadow-sm">
              <img src={el.image} className="card-img-top" alt={el.title} style={{ height: "300px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title">{el.title}</h5>
                <p className="card-text">{el.category}</p>
                <h6 className="card-text">{el.price}</h6>
                <p className="card-text"><small>{el.description}</small></p>
                <Link to={`/ProductDetails/${el.id}`} className="btn btn-danger">Buy Item</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
     <section className="bg-secondary py-5 mt-4">
     <div className="container">
       <div className="row text-center">
         <div className="col-md-6 mx-auto">
           <h2>Subscribe to AETHER for exclusive updates.</h2>
           <input
             type="text"
             placeholder="EMAIL ADDRESS"
             className="form-control my-3"
             style={{ borderRadius: "50px" }}
           />
           <div className="form-check form-check-inline">
             <input
               className="form-check-input"
               type="checkbox"
               id="men"
               value="men"
             />
             <label className="form-check-label" htmlFor="men">
               MEN
             </label>
           </div>
           <div className="form-check form-check-inline">
             <input
               className="form-check-input"
               type="checkbox"
               id="women"
               value="women"
             />
             <label className="form-check-label" htmlFor="women">
               WOMEN
             </label>
           </div>
           <button className="btn btn-outline-light mt-3">Subscribe</button>
         </div>
       </div>
     </div>
   </section>
   <div className="position-relative">
         <a href="" style={{fontSize:"150px",letterSpacing:"100px",paddingLeft :"8%",fontWeight:"500",textDecoration:"none",color:"black"}}>AETHER</a>
         <div className="spin-container">
       <div className="spin-text">
         <div className="spin-circle">
           <img src={mainlogo} alt="Logo" className="spin-logo" style={{height:"200px",width:"100px"}}/>
           <p className="spin-content"></p>
         </div>
       </div>
     </div>
       </div>
       </>
  );
};

export default Productpage;
