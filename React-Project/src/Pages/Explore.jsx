import React from 'react'
import women from "../assets/Image/women.webp";
import video5 from '../assets/video/high5.mp4'
import '../App.css'



const Explore = () => {
  return (
    <><div style={{backgroundColor:"#eeece4"}}>
    <div className="container-fluid" style={{backgroundColor:"#eeece4",height:"150px"}}>
        <div className="row">
            <div className="col-4">
                <div style={{marginTop:"10%",fontSize:"12px"}}>
                    <p>Adventures and the Friends that<br></br> came along for the ride.</p>
                </div>
            </div>
            <div className="col-4">
                <div>
                    <h1 style={{fontWeight:"500",letterSpacing:"20px",fontSize:"100px",marginLeft:"-10%"}}>JOURNAL</h1>
                </div>
                
            </div>
            <div className="col-4" style={{paddingLeft:"15%",paddingTop:"3%"}}>
            <div>
                    <img src="https://aetherapparel.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmountainsPictogram.27bc1a90.png&w=105&q=75" alt="" />
                </div>
            </div>
        </div>   
    </div>
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
        <button className="btn btn-outline-dark mt-3" style={{color:"white"}}>
                View Story
                </button>
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
      <div className='container'>
            <div className="row mt-5  text-white">
            <div className="col-md-6">
                
                <img src="https://cdn.sanity.io/images/e5o7qwlw/production/96af22ffd0b89439e664d09387d2aba56a4a4b50-8368x5584.jpg?rect=17,0,8335,5584&w=1024&h=686&q=75&auto=format" alt="" style={{height:"500px",width:"100%"}}/>
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
              <button className="btn btn-dark">Read Story</button>
             <div style={{marginTop:"22%",display:"flex"}}>
                    <p style={{paddingTop:"1.5%",fontSize:"12px"}}>JUNE 13, 2024</p> &nbsp;&nbsp;&nbsp;
                    <button className="btn btn-light" style={{height:"35px",fontSize:"12px"}}>TRAVEL</button> &nbsp;&nbsp;&nbsp;
                    <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>PHOTO ESSAYS</button>
             </div>
            </div>
          </div>
            </div>
      </section>
      <section>
      <div className='container'>
            <div className="row mt-5  text-dark">
                <div className="col-md-6" >
              
                <h1>Restless Spirits: Nikita Bridan, Co-Founder, Oilstainlab</h1>
                
                <button className="btn btn-dark">Read Story</button>
                <div style={{marginTop:"51%",display:"flex",fontSize:"12px"}}>
                        <p style={{paddingTop:"1.5%"}}>MAY 21, 2024</p> &nbsp;&nbsp;&nbsp;
                        <button className="btn btn-light" style={{height:"35px",fontSize:"12px"}}>PHOTO ESSAYS</button> &nbsp;&nbsp;&nbsp;
                        <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>ART & DESIGN</button>
                </div>
                    
                
                </div>
            <div className="col-md-6 p-1 text-dark">
         
                <img src="https://cdn.sanity.io/images/e5o7qwlw/production/fd564360087207d19bf61edc78a05dee285064c4-6185x4123.jpg?rect=576,947,5377,3176&w=1920&q=75&auto=format" alt="" style={{height:"500px",width:"100%"}}/>
            </div>
          </div>
            </div>
      </section>
      <section>
            <div className='container'>
            <div className="row mt-5  text-dark">
            <div className="col-md-6">
                <video loop autoPlay muted style={{height:"700px"}} >
                    <source src={video5} type="video/mp4" />
                </video>
            </div>
            <div className="col-md-6 " style={{paddingRight:"5%",paddingTop:"2%"}}>
              <h3>Desert Days: The 7th Annual AETHER Rally Pioneertown</h3>
              <p>
              We recently wrapped up our 7th Annual AETHER Rally Pioneertown, a 3-day weekend spent celebrating the restless spirit with our community. If you were there, you know the fun we had, and if you weren't, check out our recap of all the activities—and then make sure to grab your ticket next year.
              </p>
              <button className="btn btn-light">Shop Now</button>
            </div>
          </div>
            </div>
      </section>




      <section>
      <div className='container'>
            <div className="row mt-5  text-dark">
            
                <div className="col-md-6" >
                <div class="ver"></div>
                <h1>Restless Spirits: Nikita Bridan, Co-Founder, Oilstainlab</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed saepe, delectus sunt eveniet assumenda possimus architecto ipsa. Voluptatem blanditiis, provident beatae aut at, pariatur facilis expedita sit voluptatum unde omnis.</p>
                <button className="btn btn-dark">Read Story</button>
                <div style={{marginTop:"37%",display:"flex",fontSize:"12px"}}>
                        <p style={{paddingTop:"1.5%"}}>MAY 21, 2024</p> &nbsp;&nbsp;&nbsp;
                        <button className="btn btn-light" style={{height:"35px",fontSize:"12px"}}>PHOTO ESSAYS</button> &nbsp;&nbsp;&nbsp;
                        <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>ART & DESIGN</button>
                </div>
                    
                
                </div>
            <div className="col-md-6 p-1 text-dark">
         
                <img src="https://cdn.sanity.io/images/e5o7qwlw/production/f6c5344a8dbca373be273da7667aa8a03629203a-8368x5584.jpg?w=1920&q=75&auto=format" alt="" style={{height:"500px",width:"100%"}}/>
            </div>
          </div>
            </div>
      </section>


      <section>
      <div className='container'>
            <div className="row mt-5  text-white">
            <div className="col-md-6">
                
                <img src="https://cdn.sanity.io/images/e5o7qwlw/production/e1bc4beeeb4c9577aa9843d1bddec1cc638a86e4-9520x6336.jpg?rect=31,0,9458,6336&w=1024&h=686&q=75&auto=format" alt="" style={{height:"500px",width:"100%"}}/>
            </div>
            <div className="col-md-6 p-5 text-dark">
                <hr />
              <h1>On Location At Rio Palena Lodge, Patagonia</h1>
              <p>
              Follow the AETHER team as they spend six adventure-filled days in the heart of Patagonia rafting Class-4 rapids, hiking volcanos, exploring glaciers, and much more.
              </p>
              <button className="btn btn-dark">Read Story</button>
             <div style={{marginTop:"22%",display:"flex"}}>
                    <p style={{paddingTop:"1.5%",fontSize:"12px"}}>MARCH 25, 2024</p> &nbsp;&nbsp;&nbsp;
                    <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>PHOTO ESSAYS</button>
             </div>
            </div>
          </div>
            </div>
      </section>


      <section>
      <div className='container'>
            <div className="row mt-5  text-dark">
            
                <div className="col-md-6" >
                <div class="ver"></div>
                <h1>Restless Spirits: Nikita Bridan, Co-Founder, Oilstainlab</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed saepe, delectus sunt eveniet assumenda possimus architecto ipsa. Voluptatem blanditiis, provident beatae aut at, pariatur facilis expedita sit voluptatum unde omnis.</p>
                <button className="btn btn-dark">Read Story</button>
                <div style={{marginTop:"37%",display:"flex",fontSize:"12px"}}>
                        <p style={{paddingTop:"1.5%"}}>FEBRUARY 22, 2024</p> &nbsp;&nbsp;&nbsp;
                        <button className="btn btn-light" style={{height:"35px",fontSize:"12px"}}>EVENTS</button> &nbsp;&nbsp;&nbsp;
                        <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>SNOW</button>
                </div>
                    
                
                </div>
            <div className="col-md-6 p-1 text-dark">
            <video loop autoPlay muted style={{width:"100%",height:"500px"}} >
                    <source src={"https://stream.mux.com/NlsL6CbVS021to5jIqyDtA4wvWxcHRbiE8jauI51ADj4/high.mp4"} type="video/mp4"/>
                </video>
         
                {/* <img src="https://cdn.sanity.io/images/e5o7qwlw/production/f6c5344a8dbca373be273da7667aa8a03629203a-8368x5584.jpg?w=1920&q=75&auto=format" alt="" /> */}
            </div>
          </div>
            </div>
      </section>

      <section>
      <div className='container'>
            <div className="row mt-5  text-white">
            <div className="col-md-6">
                
                <img src="https://cdn.sanity.io/images/e5o7qwlw/production/b4e010db0e438b58e3030c18caf4745f24c99078-4240x2832.jpg?rect=421,0,3399,2277&w=1024&h=686&q=75&auto=format" alt="" style={{height:"500px",width:"100%"}}/>
            </div>
            <div className="col-md-6 p-5 text-dark">
                <hr />
              <h1>The Silk Road to Mustang</h1>
              <p>
              This fall, a group of riders ventured into the rugged terrain of Nepal, covering 300 miles from Kathmandu to Lo-Manthang. The riders negotiated treacherous roads, overcame bike breakdowns, embraced the breathtaking Himalayas—and even took a few AETHER pieces along the journey.
              </p>
              <button className="btn btn-dark">Read Story</button>
             <div style={{marginTop:"22%",display:"flex"}}>
                    <p style={{paddingTop:"1.5%",fontSize:"12px"}}>JANUARY 11, 2024</p> &nbsp;&nbsp;&nbsp;
                    <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>PHOTO ESSAYS</button>&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>MOTO</button>

             </div>
            </div>
          </div>
            </div>
      </section>

      <section>
      <div className='container'>
            <div className="row mt-5  text-dark">
            
                <div className="col-md-6" >
                <div class="ver"></div>
                <h1>Corkscrew Carnage: Porsche Rennsport Reunion 7</h1>
                <p>We loaded up the AETHERstream and attended Porsche Rennsport Reunion 7, an event fueled with heart-pounding races and motorsport prowess. The vibrant community of more than 90,000 enthusiasts gathered at Laguna Seca Raceway to celebrate 75 years of Porsche.</p>
                <button className="btn btn-dark">Read Story</button>
                <div style={{marginTop:"25%",display:"flex",fontSize:"12px"}}>
                        <p style={{paddingTop:"1.5%"}}>DECEMBER 6, 2023 </p> &nbsp;&nbsp;&nbsp;
                        <button className="btn btn-light" style={{height:"35px",fontSize:"12px"}}>PHOTO ESSAYS</button> &nbsp;&nbsp;&nbsp;
                        <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>EVENTS</button>
                </div>
                    
                
                </div>
            <div className="col-md-6 p-1 text-dark">
            <video loop autoPlay muted style={{width:"100%",height:"500px"}} >
                    <source src={"https://stream.mux.com/Ig2wD3IuRK1mxwJPYLuFoEJxGize2FLyQuUk01L5Fmq4/high.mp4"} type="video/mp4"/>
                </video>
          
                {/* <img src="https://cdn.sanity.io/images/e5o7qwlw/production/f6c5344a8dbca373be273da7667aa8a03629203a-8368x5584.jpg?w=1920&q=75&auto=format" alt="" /> */}
            </div>
          </div>
            </div>
      </section>

      <section>
      <div className='container'>
            <div className="row mt-5  text-white">
            <div className="col-md-6">
                
                <img src="https://cdn.sanity.io/images/e5o7qwlw/production/a90dc9470a686cb23c5bd80c573b073898643d8d-7952x5304.jpg?w=1920&q=75&auto=format" alt="" style={{height:"500px",width:"100%"}}/>
            </div>
            <div className="col-md-6 p-5 text-dark">
                <hr />
              <h1>Short Film: Exploring Silverton—Colorado’s Winter Playground</h1>
              <p>
              Discover the allure of Silverton in our short film—a documentary-style glimpse into the exhilarating rugged terrain of this 650-resident, Wild West town that has preserved its rich history.
              </p>
              <button className="btn btn-dark">Read Story</button>
             <div style={{marginTop:"22%",display:"flex"}}>
                    <p style={{paddingTop:"1.5%",fontSize:"12px"}}>OCTOBER 31, 2023</p> &nbsp;&nbsp;&nbsp;
                    <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>SNOW</button> &nbsp;&nbsp;&nbsp;
                    <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>PHOTO ESSAYS</button>&nbsp;&nbsp;&nbsp;
                    

             </div>
            </div>
          </div>
            </div>
      </section>



      <section>
      <div className='container'>
            <div className="row mt-5  text-dark">
            
                <div className="col-md-6" >
                <div class="ver"></div>
                <h1>The Glorious Sights of Baja California, Mexico</h1>
                <p>This summer, a group of six friends embarked on an unforgettable exploration from Los Angeles to the beautiful Baja California peninsula. Read our story told by these moto riders with a zest for life outdoors.</p>
                <button className="btn btn-dark">Read Story</button>
                <div style={{marginTop:"25%",display:"flex",fontSize:"12px"}}>
                        <p style={{paddingTop:"1.5%"}}>SEPTEMBER 27, 2023 </p> &nbsp;&nbsp;&nbsp;
                        <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>MOTO</button>&nbsp;&nbsp;&nbsp;
                        <button className="btn btn-light" style={{height:"35px",fontSize:"12px"}}>PHOTO ESSAYS</button> 
                      
                </div>
                    
                
                </div>
            <div className="col-md-6 p-1 text-dark">
            <video loop autoPlay muted style={{width:"100%",height:"500px"}} >
                    <source src={"https://stream.mux.com/rA9r9z6ANxBKiJXctEg801LUzxHSH3mwuF299ZKEGuWE/high.mp4"} type="video/mp4"/>
                </video>
          
                {/* <img src="https://cdn.sanity.io/images/e5o7qwlw/production/f6c5344a8dbca373be273da7667aa8a03629203a-8368x5584.jpg?w=1920&q=75&auto=format" alt="" /> */}
            </div>
          </div>
            </div>
      </section>



      <section>
      <div className='container'>
            <div className="row mt-5  text-white">
            <div className="col-md-6">
                
                <img src="https://cdn.sanity.io/images/e5o7qwlw/production/b9c72148fa69a63d49e1c4171f46a3561ad3a711-8368x5584.jpg?rect=2036,0,4296,5584&w=1024&h=1331&q=75&auto=format" alt="" style={{height:"500px",width:"100%"}}/>
            </div>
            <div className="col-md-6 p-5 text-dark">
                <hr />
              <h1>AETHER + Mackintosh: Merging Craftsmanship and Performance</h1>
              <p>
              Learn more about our Field collaboration—the result of combining AETHER’s relentless pursuit in creating ready-for-adventure garments with Mackintosh's distinguished coat-making technique that has been masterfully executed over generations.
              </p>
              <button className="btn btn-dark">Read Story</button>
             <div style={{marginTop:"15%",display:"flex"}}>
                    <p style={{paddingTop:"1.5%",fontSize:"12px"}}>SEPTEMBER 13, 2023</p> &nbsp;&nbsp;&nbsp;
                   
                    <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>ARTS & DESIGN</button>&nbsp;&nbsp;&nbsp;
                    

             </div>
            </div>
          </div>
            </div>
      </section>


      <section>
      <div className='container'>
            <div className="row mt-5  text-dark">
            
                <div className="col-md-6" >
                <div class="ver"></div>
                <h1>Unleash Your Wanderlust With These 5 Unique Vacation Rentals</h1>
                <p>Immerse yourself in breathtaking locations and thrilling architectural treasures worldwide. Read to discover five unique vacation rentals that are sure to fulfill your desire for adventure.</p>
                <button className="btn btn-dark">Read Story</button>
                <div style={{marginTop:"25%",display:"flex",fontSize:"12px"}}>
                        <p style={{paddingTop:"1.5%"}}>AUGUST 9, 2023 </p> &nbsp;&nbsp;&nbsp;
                        <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>TRAVEL</button>&nbsp;&nbsp;&nbsp;
                   
                      
                </div>
                    
                
                </div>
            <div className="col-md-6 p-1 text-dark">
            
          
                <img src="https://cdn.sanity.io/images/e5o7qwlw/production/dd5c23555e3cc59b257219d04357d4f77fe5d688-2400x1611.jpg?rect=0,2,2400,1608&w=1024&h=686&q=75&auto=format" alt="" style={{height:"500px",width:"100%"}}/>
            </div>
          </div>
            </div>
      </section>










      <section>
      <div className='container'>
            <div className="row mt-5  text-white">
            <div className="col-md-6" >
            <video loop autoPlay muted style={{width:"100%",height:"500px"}} >
                    <source src={"https://stream.mux.com/J5e13qFz52mWIzDT8hEYGsKkw8Xq1rbzeK4W601AMOp8/high.mp4" } type="video/mp4" />
                </video>
                
                {/* <img src="https://cdn.sanity.io/images/e5o7qwlw/production/b9c72148fa69a63d49e1c4171f46a3561ad3a711-8368x5584.jpg?rect=2036,0,4296,5584&w=1024&h=1331&q=75&auto=format" alt="" style={{height:"500px",width:"100%"}}/> */}
            </div>
            <div className="col-md-6 p-5 text-dark">
                <hr />
              <h1>Our Premier Watch In Collaboration With Bamford London</h1>
              <p>
              We were thrilled to partner with renowned watchmaker Bamford London to design and offer a limited edition timepiece that furthers our mission—to create versatile, technical pieces to optimize experiences, promote travel and adventure, and exemplify our core mantra: you only get one spin.
              </p>
              <button className="btn btn-dark">Read Story</button>
             <div style={{marginTop:"5%",display:"flex"}}>
                    <p style={{paddingTop:"1.5%",fontSize:"12px"}}>JULY 20, 2023</p> &nbsp;&nbsp;&nbsp;
                   
                    <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>ARTS & DESIGN</button>&nbsp;&nbsp;&nbsp;
                    

             </div>
            </div>
          </div>
            </div>
      </section>



      <section>
      <div className='container'>
            <div className="row mt-5  text-white">
            <div className="col-md-6">
                
                <img src="https://cdn.sanity.io/images/e5o7qwlw/production/0067ea277fe190a6257f8c490e9f025d5350714b-5184x3456.jpg?rect=169,209,4847,3247&w=1024&h=686&q=75&auto=format" alt="" style={{height:"500px",width:"100%"}}/>
            </div>
            <div className="col-md-6 p-5 text-dark">
                <hr />
              <h1>Celebrating LGBTQIA+ Outdoor Organizations: Embracing Love, Inclusion, and Adventure</h1>
              <p>
              This Pride month, join AETHER as we celebrate and raise awareness of these LGBTQIA+ organizations. They have significantly and positively impacted the outdoor community, and we couldn't be more inspired by their work.              </p>
              <button className="btn btn-dark">Read Story</button>
             <div style={{marginTop:"8%",display:"flex"}}>
                    <p style={{paddingTop:"1.5%",fontSize:"12px"}}>JUNE 22, 2023</p> &nbsp;&nbsp;&nbsp;
                   
                    <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>RESPONSIBILITY</button>&nbsp;&nbsp;&nbsp;
                    

             </div>
            </div>
          </div>
            </div>
      </section>



      <section>
      <div className='container'>
            <div className="row mt-5  text-dark">
            
                <div className="col-md-6" >
                <div class="ver"></div>
                <h1>Smokejumpers 2 - The Environmental Impact of Wildfires</h1>
                <p>IAs part of our series on the heroic firefighters known as Smokejumpers, AETHER looks at the enormous frontline role they play in combating climate change and how they can serve as a vital tool to drastically reduce emissions and save lives.</p>
                <button className="btn btn-dark">Read Story</button>
                <div style={{marginTop:"25%",display:"flex",fontSize:"12px"}}>
                        <p style={{paddingTop:"1.5%"}}>JUNE 7, 2023 </p> &nbsp;&nbsp;&nbsp;
                        <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>PHOTO ESSAYS</button>&nbsp;&nbsp;&nbsp;
                   
                      
                </div>
                    
                
                </div>
            <div className="col-md-6 p-1 text-dark">
            
            <video loop autoPlay muted style={{width:"100%",height:"600px"}} >
                    <source src={"https://stream.mux.com/LgM00xjNAFiC01qdnjdUFAwLOQmph5600xmfa4NH02ArZos/high.mp4" } type="video/mp4" />
                </video>
                
            </div>
          </div>
            </div>
      </section>


      <section>
      <div className='container'>
            <div className="row mt-5  text-white">
            <div className="col-md-6">
                
                <img src="https://cdn.sanity.io/images/e5o7qwlw/production/86083a211ebd7f8ac589e242d13bad4db8a9d0be-8560x5685.jpg?rect=37,0,8486,5685&w=1024&h=686&q=75&auto=format" alt="" style={{height:"500px",width:"100%"}}/>
            </div>
            <div className="col-md-6 p-5 text-dark">
                <hr />
              <h1>Event Recap: The 6th Annual AETHER Rally in Pioneertown</h1>
              <p>
              From moto rides to live music and everything in between, our 6th annual AETHER Rally was a success. The desert weekend included scenic excursions through Joshua Tree National Park as well as evening fireside chats over mezcal and other refreshments. Thank you to all of our sponsors, attendees, and Pioneertown Motel for making it a rally to remember.              </p>
              <button className="btn btn-dark">Read Story</button>
             <div style={{marginTop:"8%",display:"flex"}}>
                    <p style={{paddingTop:"1.5%",fontSize:"12px"}}>MAY 17, 2023</p> &nbsp;&nbsp;&nbsp;
                   
                    <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>MOTO</button>&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>EVENTS</button>

                    

             </div>
            </div>
          </div>
            </div>
      </section>

      <section>
      <div className='container'>
            <div className="row mt-5  text-dark">
            
                <div className="col-md-6" >
                <div class="ver"></div>
                <h1 style={{paddingTop:"5%"}}>On the Ground in Ukraine with Photographer Jason Perry</h1>
                <p style={{paddingTop:"5%"}}>Last summer, advertising photographer Jason Perry traveled to Ukraine to provide supplies for civilians amidst the Russian invasion. When travel challenges left him stranded in Amsterdam, his search for ground travel led him to Zeilen Van Vrijheid—a Dutch volunteer team with convoys of  ambulances equipped with medical supplies to support doctors in Ukraine.</p>
                <button className="btn btn-dark">Read Story</button>
                <div style={{marginTop:"20%",display:"flex",fontSize:"12px"}}>
                        <p style={{paddingTop:"1.5%"}}>APRIL 21, 2023 </p> &nbsp;&nbsp;&nbsp;
                        <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>PHOTO ESSAYS</button>&nbsp;&nbsp;&nbsp;
                   
                      
                </div>
                    
                
                </div>
            <div className="col-md-6 p-1 text-dark">
            
          
                <img src="https://cdn.sanity.io/images/e5o7qwlw/production/3340002558c1838316d5af6fa5f79655f578d7f8-3743x2808.jpg?rect=0,150,3743,2508&w=1024&h=686&q=75&auto=format" alt="" style={{height:"500px",width:"100%"}}/>
            </div>
          </div>
            </div>
      </section>




      <section>
      <div className='container'>
            <div className="row mt-5  text-white">
            <div className="col-md-6">
                
                <img src="https://cdn.sanity.io/images/e5o7qwlw/production/305b7a17a483ac9c76662cd2766c72ccd40e5404-5760x4280.jpg?rect=1390,407,2980,3873&w=1024&h=1331&q=75&auto=format" alt="" style={{height:"600px",width:"100%"}}/>
            </div>
            <div className="col-md-6 p-5 text-dark">
                <hr />
              <h1>A Closer Look At AETHER Optics</h1>
              <p>
              For 14 years, AETHER has strived to provide technical outerwear that protects you from the elements—this year, we've expanded this mission to include protective eyewear as well. Learn more about the process behind our new AETHER Optics collection with designer David Rose.
              </p>
              <button className="btn btn-dark">Read Story</button>
             <div style={{marginTop:"35%",display:"flex"}}>
                    <p style={{paddingTop:"1.5%",fontSize:"12px"}}>APRIL 12, 2023</p> &nbsp;&nbsp;&nbsp;
                   
                    <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>ARTS & DESIGN</button>&nbsp;&nbsp;&nbsp;
                    

             </div>
            </div>
          </div>
            </div>
      </section>


      <section>
      <div className='container'>
            <div className="row mt-5  text-dark">
            
                <div className="col-md-6" >
                <div class="ver"></div>
                <h1 style={{paddingTop:"5%"}}>AETHER Rally in Pioneertown 2023</h1>
                <p style={{paddingTop:"5%"}}>Join us on May 5-7, 2023 for our sixth annual AETHER Rally in Pioneertown, near Joshua Tree National Park..</p>
                <button className="btn btn-dark">Read Story</button>
                <div style={{marginTop:"30%",display:"flex",fontSize:"12px"}}>
                        <p style={{paddingTop:"1.5%"}}>MARCH 17, 2023 </p> &nbsp;&nbsp;&nbsp;
                        <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>EVENTS</button>&nbsp;&nbsp;&nbsp;
                        <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>MOTO</button>&nbsp;&nbsp;&nbsp;

                   
                      
                </div>
                    
                
                </div>
            <div className="col-md-6 p-1 text-dark">
            
          
                <img src="https://cdn.sanity.io/images/e5o7qwlw/production/f594e50d56be3da6b18f7620a5bff57888dc2d3f-2400x1603.jpg?w=1920&q=75&auto=format" alt="" style={{height:"500px",width:"100%"}}/>
            </div>
          </div>
            </div>
      </section>


      <section>
      <div className='container'>
            <div className="row mt-5  text-white">
            <div className="col-md-6">
                
                <img src="https://cdn.sanity.io/images/e5o7qwlw/production/678a699309910d2c058b0a9614b6fcb2dbab57b0-1216x1509.tif?rect=0,102,1216,795&w=1920&q=75&auto=format" alt="" style={{height:"600px",width:"100%"}}/>
            </div>
            <div className="col-md-6 p-5 text-dark">
                <hr />
              <h1>Smokejumpers: The Unsung Heroes on the Front Lines of the Wildfires</h1>
              <p>
              Part one in a series about smokejumpers, an elite group of firefighters on the front lines of wildfires. AETHER will be sharing their incredible stories and donating high quality clothing to these unsung heroes who quietly risk their lives to protect the forests and the environment.
              </p>
              <button className="btn btn-dark">Read Story</button>
             <div style={{marginTop:"30%",display:"flex"}}>
                    <p style={{paddingTop:"1.5%",fontSize:"12px"}}>FEBRUARY 28, 2023</p> &nbsp;&nbsp;&nbsp;
                   
                    <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>RESPONSIBILITY</button>&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>PHOTO ESSAYS</button>&nbsp;&nbsp;&nbsp;
             </div>
            </div>
          </div>
            </div>
      </section>


      <section>
      <div className='container'>
            <div className="row mt-5  text-dark">
            
                <div className="col-md-6" >
                <div class="ver"></div>
                <h1 style={{paddingTop:"5%"}}>AETHER Asks: Jaycee Gossett, Founding Teacher of The Class</h1>
                <p style={{paddingTop:"5%"}}>We catch up with the wellness guru to talk about her cult following, how NYC compares to LA, and why travel is so important her well-being.</p>
                <button className="btn btn-dark">Read Story</button>
                <div style={{marginTop:"30%",display:"flex",fontSize:"12px"}}>
                        <p style={{paddingTop:"1.5%"}}>SEPTEMBER 29, 2023 </p> &nbsp;&nbsp;&nbsp;
                        <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>AETHER ASKS</button>&nbsp;&nbsp;&nbsp;

                   
                      
                </div>
                    
                
                </div>
            <div className="col-md-6 p-1 text-dark">
            
          
                <img src="https://cdn.sanity.io/images/e5o7qwlw/production/f3ffd3b0e9bbf4867333252bab5a755e6879ac5f-6000x4000.jpg?w=1920&q=75&auto=format" alt="" style={{height:"500px",width:"100%"}}/>
            </div>
          </div>
            </div>
      </section>


      <section>
      <div className='container'>
            <div className="row mt-5  text-white">
            <div className="col-md-6">
                
                <img src="https://cdn.sanity.io/images/e5o7qwlw/production/8e5ca565c38977f2fabf86e78a3c1d58230609e8-5360x3571.jpg?w=1920&q=75&auto=format" alt="" style={{height:"500px",width:"100%"}}/>
            </div>
            <div className="col-md-6 p-5 text-dark">
                <hr />
              <h1>The AETHER Guide To Denver</h1>
              <p>
              What not to miss in the mile-high city.
              </p>
              <button className="btn btn-dark">Read Story</button>
             <div style={{marginTop:"35%",display:"flex"}}>
                    <p style={{paddingTop:"1.5%",fontSize:"12px"}}>SEPTEMBER 19, 2022</p> &nbsp;&nbsp;&nbsp;
                   
                    <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>TRAVEL</button>&nbsp;&nbsp;&nbsp;
             </div>
            </div>
          </div>
            </div>
      </section>



      <section>
      <div className='container'>
            <div className="row mt-5  text-dark">
            
                <div className="col-md-6" >
                <div class="ver"></div>
                <h1 style={{paddingTop:"5%"}}>AETHER Asks: Jaycee Gossett, Founding Teacher of The Class</h1>
                <p style={{paddingTop:"5%"}}>We catch up with the wellness guru to talk about her cult following, how NYC compares to LA, and why travel is so important her well-being.</p>
                <button className="btn btn-dark">Read Story</button>
                <div style={{marginTop:"30%",display:"flex",fontSize:"12px"}}>
                        <p style={{paddingTop:"1.5%"}}>SEPTEMBER 29, 2023 </p> &nbsp;&nbsp;&nbsp;
                        <button className="btn btn-light"style={{height:"35px",fontSize:"12px"}}>AETHER ASKS</button>&nbsp;&nbsp;&nbsp;

                   
                      
                </div>
                    
                
                </div>
            <div className="col-md-6 p-1 text-dark">
            
          
                <img src="https://cdn.sanity.io/images/e5o7qwlw/production/f3ffd3b0e9bbf4867333252bab5a755e6879ac5f-6000x4000.jpg?w=1920&q=75&auto=format" alt="" style={{height:"500px",width:"100%"}}/>
            </div>
          </div>
            </div>
      </section>










      </div>
    </>
  )
}

export default Explore