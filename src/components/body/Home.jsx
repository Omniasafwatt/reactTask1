import React from 'react'
import "../body/Home.css"

export default function Home() {
  return (
    <>
         <div className="home text-center text-white">
          <img src="imgs/avataaars.svg" className="img mt-5" alt="" />
          <h2 className='pt-5 pb-3 fs-1 fw-bold w-50 m-auto '>START FRAMEWORK 
          </h2>
          <div className="linestar mb-3">
    <div className="line me-3"></div>
    <i className="fa-solid fa-star"></i>
        <div className="line ms-3"></div>
    </div>
          <p className='py-3 '>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </>
  )
}
