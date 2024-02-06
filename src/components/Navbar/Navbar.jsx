import React from 'react'
import "../Navbar/Navbar.css"
import { Link } from 'react-router-dom'
import Portfolio from '../body/Portfolio'
import Contact from '../body/Contact'

export default function Navbar() {
  return (
    <>
<nav className="navbarr navbar navbar-expand-lg p-3">
  <div className="container">
    <Link className="navbar-brand">START FRAMEWORK</Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='Portfolio'>PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='Contact'>CONTACT</Link>
        </li>
        </ul>
    </div>
  </div>
</nav>


    </>
  )
}
