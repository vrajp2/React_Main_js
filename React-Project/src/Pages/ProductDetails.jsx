import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import mainlogo from "../assets/Image/mainlogo.png";


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/Product/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/Product/${id}`)
      .then(() => {
        alert("Product deleted successfully!");
        console.log(product);
      })
      .catch((error) => console.error("Error deleting product:", error));
  };
  const addToCardFunction = () => {
    
    axios.post("http://localhost:8080/cart",product)
      .then((res) => {
        console.log(res);
        alert("data added succesfully")
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (!product) {
    return <div className="text-center mt-4" style={{fontSize:"45px",fontWeight:"bold"}}>Loading...</div>;
  }

  return (
    <>
    <div className="container mt-4">
      <h2 className="text-center">Product Details</h2>
      <br />
      <div className="card mx-auto" style={{ width: "80%", maxWidth: "600px" }}>
        <div className="card-body text-center">
          <h1 className="card-title">{product.title}</h1>
          <img src={product.image} alt={product.title} className="card-img-top img-fluid" style={{ maxHeight: "300px", objectFit: "cover" }} />
          <br />
          <br />
          <p className="card-text font-weight-bold">Price: {product.price}</p>
          <p className="card-text">Category:{product.category}</p>
       
          <p className="card-text">Color:{product.Color}</p>
       
          <p className="card-text">{product.description}</p>
          <br />
          <div className="d-flex justify-content-around">
            <Link to={`/Editproduct/${product.id}`} className="btn btn-danger">
              Edit
            </Link>
            {/* <Link onClick={handleDelete} to={`/Deleteproduct/${product.id}`} className="btn btn-danger">
              Delete
            </Link> */}
<Link onClick={handleDelete} to={`/Deleteproduct/${product.id}`}><button class="Btn">
  <div class="sign">
    <svg
      viewBox="0 0 16 16"
      class="bi bi-trash3-fill"
      fill="currentColor"
      height="18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"
      ></path>
    </svg>
  </div>

  <div class="text">Delete</div>
</button></Link>

            <Link to={"/Addcart"} onClick={addToCardFunction} className="btn btn-primary">
              Add to Cart
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

export default ProductDetails;
