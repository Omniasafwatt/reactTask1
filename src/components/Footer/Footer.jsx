import React from 'react'
import "../Footer/Footer.css"

export default function Footer() {
  return (
    <>
    <div className="containerr">
        <div className="row">
            <div className="col-md-4 text-center">
                <h2>LOCATION</h2>
                <p>2215 John Daniel Drive</p>
                <p className='mt-3'>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 text-center">
                <h2>AROUND THE WEB</h2>
                <div className="icons ">
                <i className="fa-brands fa-facebook mx-1 icon"></i>
                <i className="fa-brands fa-twitter mx-1 icon"></i>
                <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
                <i className="fa-solid fa-globe mx-1 icon"></i>
                </div>
            </div>

            <div className="col-md-4 text-center">
                <h2>ABOUT FREELANCER</h2>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Routes</p>
            </div>
        </div>
    </div>

    </>
  )
}
