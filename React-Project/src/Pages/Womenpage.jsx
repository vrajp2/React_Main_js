import React from 'react'
import women from "../assets/Image/women.webp";
import logo from "../assets/Image/img1.webp";
import video3 from '../assets/video/high3.mp4'
import video4 from '../assets/video/high4.mp4'
import des from "../assets/Image/des.webp";
import mainlogo from "../assets/Image/mainlogo.png";
import { Link } from 'react-router-dom';

import "../App.css"



const Womenpage = () => {
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
          <h1>End-of-Season Sale</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Eligendi quis corrupti necessitatibus dignissimos cumque id,
            voluptatum aut aliquam nisi cum.
          </p>
         {/* <Link to={"/Womenproduct"}> <button className="btn btn-outline-dark mt-3" style={{color:"white"}}>
                  Shop Now
                </button></Link> */}
                {/*  From Uiverse.io by alexmaracinaru  */}
                <Link to={"/Womenproduct"}> <button class="cta"  >
                    <span class="hover-underline-animation text-light"> Shop now </span>
                    <svg
                      id="arrow-horizontal"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="10"
                      viewBox="0 0 46 16"
                    >
                      <path 
                      
                        id="Path_10"
                        data-name="Path 10"
                        d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                        transform="translate(30)"
                      ></path>
                    </svg>
                  </button></Link> 
 
        </div>
        <div>
        <img
                  src={women}
                  alt="Best Seller"
                  className="img"
                  style={{ height: "600px",width:"100%" }}
                />
        </div>
      </div>
      <section>
        <div className="container">
          <div className="my-5">
            <hr />
            <span style={{ fontSize: "32px" }}>For the Restless</span>
          </div>
          <div className="row justify-content-center">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="col-md-3 text-center">
                <img
                  src="https://cdn.shopify.com/s/files/1/0218/9988/products/w_bard_jumpsuit_te_03.jpg?v=1679336857&width=1024&height=1331&crop=center"
            
                  alt="Adventure"
                  className="img-fluid"
                  style={{ height: "500px" }}
                />
                <h3 className="pt-3">Adventure</h3>
                <p className="pt-3">Travel-ready styles for any journey.</p>
                <button className="btn btn-outline-dark mt-3">
                  EXPLORE
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
            <div className='container'>
            <div className="row mt-5 bg-dark text-white">
            <div className="col-md-6">
                <video loop autoPlay muted style={{height:"700px"}} >
                    <source src={video3} type="video/mp4" />
                </video>
            </div>
            <div className="col-md-6 p-5">
                <hr />
              <h3>Just Landed: The Emery Collection</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam aperiam quidem, ad delectus cupiditate corporis. In,
                nihil optio. Saepe officia quis necessitatibus expedita
                repudiandae rem deserunt, magnam illum voluptates nostrum!
              </p>
              <button className="btn btn-light">Shop Now</button>
            </div>
          </div>
            </div>
      </section>
      <section>
      <div className='container'>
            <div className="row mt-5  text-white">
            <div className="col-md-6">
                <video loop autoPlay muted style={{height:"700px",width:"100%"}} >
                    <source src={video4} type="video/mp4" />
                </video>
            </div>
            <div className="col-md-6 p-5 text-dark">
                <hr />
              <h1>Just Landed: The Emery Collection</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam aperiam quidem, ad delectus cupiditate corporis. In,
                nihil optio. Saepe officia quis necessitatibus expedita
                repudiandae rem deserunt, magnam illum voluptates nostrum!
              </p>
              <button class="cta"  >
                    <span class="hover-underline-animation"> Shop now </span>
                    <svg
                      id="arrow-horizontal"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="10"
                      viewBox="0 0 46 16"
                    >
                      <path 
                      
                        id="Path_10"
                        data-name="Path 10"
                        d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                        transform="translate(30)"
                      ></path>
                    </svg>
                  </button>
            </div>
          </div>
            </div>
      </section>
      <section className="bg-light py-5">
        <div className="container">
          <h1 className="text-center">New in the AETHER Journal</h1>
          <div className="row text-center">
            {[1, 2].map((_, index) => (
              <div key={index} className="col-md-6">
                <img
                  src={des}
                  alt="Journal"
                  className="img-fluid"style={{height:"600px"}}
                />
                <p>Journal Description {index + 1}</p>
                <button className="btn btn-outline-dark mt-3">View Story</button>
              </div>
            ))}
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
  )
}

export default Womenpage