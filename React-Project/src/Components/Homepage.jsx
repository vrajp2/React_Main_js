import React, { useRef } from "react";
import video from "../assets/video/high.mp4";
import video2 from "../assets/video/high2.mp4";
import logo from "../assets/Image/img1.webp";
import bike from "../assets/Image/img2.webp";
import people from "../assets/Image/img3.webp";
import truck from "../assets/Image/truck.webp";
import { FaArrowCircleUp } from "react-icons/fa";
import "../App.css"
import mainlogo from "../assets/Image/mainlogo.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  const ref = useRef(null);

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
          <h1>Built for Adventure</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Eligendi quis corrupti necessitatibus dignissimos cumque id,
            voluptatum aut aliquam nisi cum.
          </p>
        </div>
        <div>
          <video loop autoPlay muted style={{ width: "100%", height: "100vh" }}>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="text-center my-5">
            <hr />
            <span style={{ fontSize: "32px" }}>For the Restless</span>
          </div>
          <div className="row justify-content-center">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="col-md-4 text-center">
                <img
                  src={logo}
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

      <section style={{ marginTop: "2%" }}>
        <div className="position-relative">
          <div
            style={{
              position: "absolute",
              top: "10%",
              color: "white",
              left: "5%",
            }}
          >
            <div className="vl"></div>
            <h1>The Motion Collection</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Eligendi quis corrupti necessitatibus dignissimos cumque id,
              voluptatum aut aliquam nisi cum.
            </p>
            <p className="btn btn-light mt-3">SHOP NOW</p>
          </div>
          <video loop autoPlay muted style={{ width: "100%", height: "100vh" }}>
            <source src={video2} type="video/mp4" />
          </video>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row my-5">
            <div className="col-md-4 text-center">
              <h1 className="pt-3">AETHER’s Best Sellers</h1>
              <p className="pt-3">
                Discover core outerwear staples that reflect our signature
                elements—featuring protective, high-quality styles for men and
                women.
              </p>
            </div>
            {[1, 2].map((_, index) => (
              <div key={index} className="col-md-4 text-center">
                <img
                  src={logo}
                  alt="Best Seller"
                  className="img-fluid"
                  style={{ height: "600px" }}
                />
                <h3 className="pt-3">Adventure</h3>
                <p className="pt-3">Travel-ready styles for any journey.</p>
                <button className="btn btn-outline-dark mt-3">
                  SHOP MEN’S BEST SELLERS
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h1 className="text-center my-5">Spring Arrivals</h1>
          <div className="row text-center">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="col-md-3">
                <img
                  src={people}
                  alt="Spring Arrival"
                  className="img-fluid"
                />
                <button className="btn btn-outline-dark mt-3">
                  SHOP ITEM {index + 1}
                </button>
              </div>
            ))}
          </div>
          <div className="row mt-5 bg-dark text-white">
            <div className="col-md-6">
              <img src={logo} alt="Logo" className="img-fluid" />
            </div>
            <div className="col-md-6 p-5">
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

      <section style={{ marginTop: "2%" }}>
        <div className="position-relative">
          <div
            style={{
              position: "absolute",
              top: "10%",
              color: "white",
              left: "5%",
            }}
          >
            <h1 className="font-weight-bold" style={{ color: "black" }}>
              The Mulholland <br />
              Motorcycle Jacket
            </h1>
            <p style={{ color: 'black' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Eligendi quis corrupti necessitatibus dignissimos cumque id,
              voluptatum aut aliquam nisi cum.
            </p>
          </div>
          <img src={bike} alt="Bike" className="img-fluid" />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row my-5">
            {[1, 2].map((_, index) => (
              <div key={index} className="col-md-4 text-center">
                <img
                  src={people}
                  alt="Men's Pants"
                  className="img-fluid"
                />
                <button className="btn btn-outline-dark mt-3">
                  SHOP MEN’S PANTS
                </button>
              </div>
            ))}
            <div className="col-md-4">
              <h2>Comfort</h2>
              <p>
                Discover the latest styles in our men’s and women’s pants
                selection—offering thoughtful construction and versatility for
                whatever adventure lies ahead.
              </p>
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
                  src={bike}
                  alt="Journal"
                  className="img-fluid"
                />
                <p>Journal Description {index + 1}</p>
                <button className="btn btn-outline-dark mt-3">View Story</button>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section>
        <div className="container my-5">
          <div className="row text-center">
            {[1, 2].map((_, index) => (
              <div key={index} className="col-md-6">
                <img
                  src={truck}
                  alt="People"
                  className="img-fluid"
                />
                <h3>People Heading {index + 1}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam aperiam quidem, ad delectus cupiditate corporis. In,
                  nihil optio.
                </p>
                <button className="btn btn-outline-dark mt-3">
                  View Story
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-secondary py-5">
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
            {/*  */}
            <ul class="wrapper">
              <li class="icon facebook">
                <span class="tooltip">Facebook</span>
                <svg
                  viewBox="0 0 320 512"
                  height="1.2em"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </li>
              <li class="icon twitter">
                <span class="tooltip">Twitter</span>
                <svg
                  height="1.8em"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  class="twitter"
                >
                  <path
                    d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                  ></path>
                </svg>
              </li>
              <li class="icon instagram">
                <span class="tooltip">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2em"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                  ></path>
                </svg>
              </li>
            </ul>



          </div>
        </div>
      </section>
      <div className="position-relative">
        <a href="" style={{ fontSize: "150px", letterSpacing: "100px", paddingLeft: "8%", fontWeight: "500", textDecoration: "none", color: "black" }}>AETHER</a>
        <div className="spin-container">
          <div className="spin-text">
            <div className="spin-circle">
              <img src={mainlogo} alt="Logo" className="spin-logo" style={{ height: "200px", width: "100px" }} />
              <p className="spin-content"></p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Homepage;
