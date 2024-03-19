import React from 'react'
import Form from './Form'
function Contact() {
  return (
    <>

<div className="bg-cover">
    <div className="text-center text-light">
     <h1 className='pt-5'>Contact</h1>
     <p>Home <i className='fa fa-arrow-right ms-3 me-3'></i> Contact</p>
    </div>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-md-6" data-aos="fade-right">
   <h5>Kindly call us or join our support group on WhatsApp.</h5>
   <ul className='list-unstyled'>
   <li><i class="fa fa-phone-square" aria-hidden="true"></i><a href="tell:08102569820" className='text-decoration-none text-dark ms-3'>08102569820</a></li>

   <li><i class="fa fa-envelope" aria-hidden="true"><a href="mailto:Nnakwechris@gmail.com " className='text-decoration-none text-dark ms-3'>Nnakwechris@gmail.com</a></i></li>
   </ul>
      </div>
      <div className="col-md-6">
        <Form/>
        </div>
    </div>
  </div>



    </>
  )
}

export default Contact