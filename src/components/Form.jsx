import React from 'react'

function Form() {
  return (
    <>
  <form action=""> 
          <div className="d-flex mt-3">
            <div className="flex-grow-1 me-2">

            <input type="text" placeholder='Name' className='form-control' />
              </div>
             <div className="flex-grow-1 ms-2">
             <input type="email" placeholder='Email' className='form-control' />
          </div>
          </div>

          <div className="d-flex mt-3">
            <div className="flex-grow-1 me-2">

            <input type="text" placeholder='phone(optional)' className='form-control' />
              </div>
             <div className="flex-grow-1 ms-2">
             <input type="text" placeholder='Subject' className='form-control' />
          </div>
          </div>
          <textarea name="" id="" cols="30" rows="10"   className='form-control mt-3 mb-3' placeholder='message'></textarea>
          <button className='btn-danger btn'>Submit</button>
          </form>



    </>
  )
}

export default Form