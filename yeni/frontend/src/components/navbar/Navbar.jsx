import React from 'react'
import { Link } from 'react-router-dom'
import { FaBasketShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='nav'>
      
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <h2><Link to="/">COLO<span>SHOP</span></Link></h2>
          </div>
          <div className="nav-list ">
            <ul>
              <li><Link  to="/">HOME</Link></li>
              <li><Link to="/shop">SHOP</Link></li>
              <li><Link to="/promotion">PROMOTION</Link></li>
              <li><Link to="/pages">PAGES</Link></li>
              <li><Link to="/blog">BLOG</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
              <li><Link to="/admin">ADMIN</Link></li>
            </ul>
          </div>
          <div className="wrapper d-flex align-items-center gap-2">
        <Link to="basket" >
        <FaBasketShopping /><sup>0</sup>
      </Link>
      <Link>
      <FaRegHeart />
      </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar