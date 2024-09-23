import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import mainlogo from "../assets/Image/mainlogo.png";


const WproductDetails = () => {
  const { id } = useParams();
  const [Womenproduct, SetWomenproduct] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/Womenproduct/${id}`)
      .then((response) => SetWomenproduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/Womenproduct/${id}`)
      .then(() => {
        alert("Product deleted successfully!");
        console.log(Womenproduct);
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

 

  return (
    <>
    <div className="container mt-4">
      <h1 className="text-center">Product Details</h1>
      <br />
      <div className="card mx-auto" style={{ width: "80%", maxWidth: "600px" }}>
        <div className="card-body text-center">
          
          <img src={Womenproduct.images}  className="card-img-top img-fluid" style={{ maxHeight: "300px",borderRadius:"10px",objectFit: "cover" }} />
          <br />
          <br />
          <p className="card-text font-weight-bold" style={{fontWeight:"bold"}}>Price: {Womenproduct.price}</p>
          <p className="card-text"><p style={{fontWeight:"bold"}}>Category:</p>{Womenproduct.category}</p>
       
       
          <p className="card-text"><p style={{fontWeight:"bold"}}>Description:</p>{Womenproduct.description}</p>
          <br />
         
          <div className="d-flex justify-content-around">
          <Link to={`/Weditpage/${Womenproduct.id}`} className="btn btn-danger">
              Edit
            </Link>
            <Link onClick={handleDelete} to={`/WdeletePage/${Womenproduct.id}`} className="btn btn-danger">
              Delete
            </Link>
           
            
          </div>
        </div>
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

export default WproductDetails;
