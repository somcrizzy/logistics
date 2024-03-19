import React from 'react'
import service from '../assets/service.png'
import Card from './Card'
import Form from './Form'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'



function Homepage() {
  return (
    <>
    <div className='Hero'>
   <div className="container text-center pt-5 text-light">
    <h2 >Easy & Quick Cargo Shipping Services</h2>
    <p>Book low cost sea freight shipping services. Get an instant quote.</p>
    <a href="" className="btn btn-danger">Track Good's Here</a>
   </div>
    </div>
    <div className="containe pt-5">
      <div className="text-center" data-aos="fade-up">
        <h2>Welcome to Crystal Shipment</h2>
        <div className="bg-danger mx-auto"></div>
        <p>Crystal Shipment is more than logistics. We can also optimize your packaging, manage your materials sourcing, and so much more.</p>
      </div>
      
       <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 " data-aos="fade-up">
         <img src={service} className='img-fluid rounded' alt="" />
        </div>
        <div className="col-md-6">
          <p className='text-danger'>TRANSPORTATION COMPANY</p>
          <h3>We Provide Full Range Logistics Solution</h3>
          <p>We strongly believe that pursuing all of these goals is in our interest and in the interest of all of our stakeholders are us customers, employees, investors and the planet as a whole. We add value to cargo people’s interaction with us, with excellent services or products. Engaging our employees and nurture investment on the stock holds market we show concern , by engaging our employees and nurture investment on the stock holds market we show concern.</p>
          <a href="" className="btn btn-danger">Learn More</a>
          </div>
      </div>
      </div>
    </div>

    <div className="container mt-5">
      <div className="text-center">
        <h6 className='text-danger'>TYPES OF LOGISTICS</h6>
        <h3>Covering All Logistics Fields</h3>
      </div>

    <Card/>
    <div className="text-center mt-4">
      <a href="" className="btn btn-danger">Load More</a>
    </div>

    </div>

    <div className="bg-warning mt-5" style={{minHeight:'200px',padding:'20px 0'}}>
      <div className="container pt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8" >
          <h2>Delivering your world one package at a time</h2>
          <p>Crystal Shipment is more than logistics.</p>
          </div>
          <div className="col-md-4 text-md-end text-sm-start">
            <a href="" className="btn btn-danger">Request A Quote</a>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6" data-aos="fade-up">
          <h2>WHY CHOOSE US?</h2>

          <div className="d-flex mt-3">
            <div className="flex-grow-1 me-2">
             <img src={icon1} className='img-fluid' alt="" />
            
              </div>
             <div className="flex-grow-1 ms-2">
             <h5>Global supply Chain Solutions</h5>
             <p>Efficiently unleash cross-media information without cross-media value.</p>
          </div>
          </div>
          <div className="d-flex mt-3">
            <div className="flex-grow-1 me-2">
             <img src={icon2}className='img-fluid'alt="" />
            
              </div>
             <div className="flex-grow-1 ms-2">
              <h5>Mobile Shipment Tracking</h5>
              <p>We Offers intelligent concepts for road and tail and well as complex special transport services</p>
          </div>
          </div>
          <div className="d-flex mt-3">
            <div className="flex-grow-1 me-2">
             <img src={icon3} className='img-fluid' alt="" />
            
              </div>
             <div className="flex-grow-1 ms-2">
              <h5>Careful Handling of Valuable Goods</h5>
              <p>Cargo HUB are transported at some stage of their journey along the world’s roads</p>
          </div>
          </div>


        </div>
        <div className="col-md-6">
          <h2>REQUEST A QUOTE</h2>
        <Form/>
          </div>
      </div>
    </div>

    </>
  )
}

export default Homepage