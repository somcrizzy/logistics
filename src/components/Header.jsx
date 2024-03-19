import React from 'react'
import Logo from '../assets/logo.png'



function Header() {
  return (
    <>
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="/"><img src={Logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        

          <a className="nav-link active" aria-current="page" style={{color:'red'}} href="/">Home</a>
          <a className="nav-link" href="/services">Services</a>
          <a className="nav-link" href="/contact">Contact</a>
          <a className="nav-link" href="/tracking">Tracking</a>
        
       </ul>
        <div className="navbar">
        <a href="" className="btn btn-danger">Request a Quote</a>
    </div>
    </div>
  
  </div>
</nav>


    </>
  )
}

export default Header