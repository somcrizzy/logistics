import React from 'react'

import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'



function Card() {

    const carddata=[
        {image:service1,title:"Air Freight", content:'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation...'},
        {image:service2,title:"Sea Freight", content:' Sea Freight plays perhaps the most vital role in most transportation and supply chain a solutions...'},
        {image:service3,title:"Land Freight", content:'Cargo are transported at some stage of their journey along the world’s roads where we give...'},
    ]
  return (
    <>


<div className="row">
    {carddata.map((card,index) =>(
                <div className="col-md-4" data-aos="fade-up">
        <div className="card" style={{width: '18rem'}}>
  <img src={card.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-title">{carddata.title}</h4>
    <p className="card-text">{card.content}<a href="" className='text-danger text-decoration-none'>Read more</a> </p>
  </div>
</div>
        </div>
      
    ))}
</div>

    </>
  )
}

export default Card