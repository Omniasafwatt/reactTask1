import React from 'react'
import"../body/About.css"

export default function About() {
  return (
    <div className='body'>
    <div className="container p-5">
    <h2>ABOUT COMPONENT</h2>
    <div className="linestar mb-3">
    <div className="line me-3"></div>
    <i className="fa-solid fa-star"></i>
    <div className="line ms-3"></div>
    </div>
    <div className="row px-5">
        <div className="col-md-6 text-start">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

        </div>
        <div className="col-md-6 text-start">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
    </div>
    </div>
    </div>
  )
}
