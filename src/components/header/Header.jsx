import React, { useState } from 'react'
import "./header.css";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function Header() {
    const [toggle, setToggle] = useState(false)
  return (
    <>
        <header className="header">
            <div className="header-top">
                <div onClick={() => setToggle(prev => !prev)} className="header-top-menu">
                { toggle ? <i className="bi bi-x-lg"></i>: <i className="bi bi-list"></i>}
                </div>
                <div className="header-top-phone">
                <i className='bi bi-telephone-fill'></i>
                    +20155-429-6194
                </div>
                <div className="header-top-text">
                    Welcome To Online Book Store 
                </div>
                <div className="header-top-link">
                    <i className='bi bi-person-fill'></i>
                    Login
                </div>
            </div>
            <div className="header-middle">
                <Link to="/" className="header-middle-logo">
                    <b>Book</b>
                    <i className="bi bi-book"></i>
                    <b>Store</b>
                </Link>
                <div className="header-middle-search-box">
                    <input type="search" placeholder='Search in book store...' />
                    <i className="bi bi-search"></i>
                </div>
                <Link to="/cart" className="header-middle-cart-wrapper">
                    <i className="bi bi-cart2"></i>
                </Link>
            </div>
            <Navbar toggle={toggle} setToggle={setToggle} />
        </header>
    </>
  )
}
