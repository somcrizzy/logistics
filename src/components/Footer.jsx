import React from 'react'
import gallery1 from '../assets/gallery1.png'

import gallery2 from '../assets/gallery2.png'
import gallery3 from '../assets/gallery3.png'
import gallery4 from '../assets/gallery4.png'



function Footer() {
  return (
    <>
        <div className="bg-dark text-light mt-5 py-5">
       <div className="container">
        <div className="row">
        <div className="col-md-3">
            <h4>CRYSTAL SHIPMENT</h4>
            <p>Crystal Shipment Services is a global supplier of transport and logistics solutions. We have offices in more than 20 countries and an international network of partners and agents.</p>
            </div>
            
        <div className="col-md-3">
            <h4>QUICK LINKS</h4>
            <ul className='list-unstyled'>
              <li><a href="" className='text-light text-decoration-none'>All Services</a></li>
              
              <li><a href="" className='text-light text-decoration-none'>Land Freight</a></li>
              <li><a href="" className='text-light text-decoration-none'>Sea Freight</a></li>
              <li><a href="" className='text-light text-decoration-none'>Air Freight</a></li>

            </ul>
            </div>
            
        <div className="col-md-3">
            <h4>PHOTO GALLERY</h4>
            <div className="d-flex mt-3">
            <div className="flex-grow-1 me-2">
             <img src={gallery1} className='img-fluid' alt="" />
            
              </div>
             <div className="flex-grow-1 ms-2">
              <img src={gallery2} className='img-fluid' alt="" />
          </div>
          </div>
          <div className="d-flex mt-3">
            <div className="flex-grow-1 me-2">
             <img src={gallery3} className='img-fluid' alt="" />
            
              </div>
             <div className="flex-grow-1 ms-2">
              <img src={gallery4} className='img-fluid' alt="" />
          </div>
          </div>


            </div>
            
        <div className="col-md-3">
            <h4>OUR NEWSLETTER</h4>
            <p>Sign up today for tips and latest news and exclusive special offers.</p>
            <input type="email" className='form-control' placeholder='Enter Your Mail' />
            <button className="btn btn-danger mt-3">Submit</button>
            </div>
        </div>
       </div>
        </div>



    </>
  )
}

export default Footer