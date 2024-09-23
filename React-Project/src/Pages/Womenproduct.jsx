import React, { useEffect, useState } from 'react'
import women from "../assets/Image/women.webp";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Womenproduct = () => {
  const [Womenproduct, setWomenproduct] = useState([]);
  const [page, setpage] = useState(1);
  const [filter, setfilter] = useState(null);
  const [sort, setsort] = useState("");
  const [search, setsearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/Womenproduct",
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
        setWomenproduct(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [setWomenproduct, filter, sort, page, search]);

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
     <div>
        <div
          style={{
            position: "absolute",
            marginTop: "10%",
            color: "white",
            marginLeft: "5%",
          }}
        >
          <div className="vl"></div>
          <h1 style={{fontWeight:"bold"}}>End-of-Season Sale</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Eligendi quis corrupti necessitatibus dignissimos cumque id,
            voluptatum aut aliquam nisi cum.
          </p>

        </div>
        <div>
        <img
                  src={women}
                  alt="Best Seller"
                  className="img"
                  style={{ height: "400px",width:"100%" }}
                />
        </div>
      </div>
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
            <option value="Kite Packable Rain Poncho">Kite Packable Rain Poncho</option>
            <option value="Hooded Tech-Fleece Full-Zip">Hooded Tech-Fleece Full-Zip</option>
            <option value="Kite Lightweight Jacket">Kite Lightweight Jacket</option>
            <option value="Topanga Lightweight Anorak">Topanga Lightweight Anorak</option>
          </select>
        </div>
        <div className="col-md-2">
          <button className="btn btn-danger w-100" onClick={resetAll}>Reset</button>
        </div>
       <div className="col-md-2">
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Womenproduct.map((el) => (
          <div key={el.id} className="col">
            <div className="card h-100 shadow-sm">
              <img src={el.images} className="card-img-top" alt={el.title} style={{ height: "600px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title">{el.title}</h5>
                <p className="card-text">{el.category}</p>
                <h6 className="card-text">{el.price}</h6>
                <p className="card-text"><small>{el.description}</small></p>
                <Link to={`/WproductDetails/${el.id}`} className="btn btn-danger">Buy Item</Link>&nbsp;&nbsp;&nbsp;
             

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Womenproduct