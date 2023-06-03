import React, { useState } from 'react'
import "./Navbar.css";
import logo from "./mainPhoto/Electronics-logo.png";
import {GiHamburgerMenu } from "react-icons";
import {Link } from "react-router-dom";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
    
    <section className='fixed-top'>
    <div className="title ">
      <center >
        <marquee>LET'S CONNECT WITH US..</marquee>
      </center>
    </div>
    {/* NAVBAR START */}
    <nav className='main-nav ' style={{backgroundColor: "#F4EFFF",
    height:88}}>
    
    
    {/* LOGO */}
    <div >
        <a class="navbar-brand" href="#">
          <img src={logo}
              alt="logo"
              />
        </a>
    </div>

    {/* MENU LINKS */}
    <div className= {showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
        <ul>
            <li className="nav-item" >
                <Link to='/' className='nav-link1 '>HOME</Link>
            </li>

            <li className="nav-item" >
                <Link to='/about' className='nav-link2 '>ABOUT US</Link>
            </li>
            <li className="nav-item" >
                <Link to='/events' className='nav-link3  '>EVENTS</Link>
            </li>
            <li className="nav-item" >
                <Link to='/team' className='nav-link4 '>OUR TEAM</Link>
            </li>

            <li className="nav-item1">
            <div className="btn-group">
              <Link to='/contact'>
                <button type="button" className="btn btn-primary " href="#" style={{ backgroundColor: "#32009B" }}>
                   Contact Us
                 <i class="fa-solid fa-phone" style={{position: "relative",right: "-6px",}}></i>
                </button>
              </Link>
            </div>
          </li>
        </ul>
    </div>

    {/* SOCIAL MEDIA LINKS */}
    <div className='social-media'>
          <ul className='social-media-desktop'>
            <li className='icon-1'>
            <a href='https://www.instagram.com/electronics.club.mits/' target='_shruti'><i class="fa-brands fa-instagram"></i></a>
            </li>

            <li className='icon-2'>
            <a href='https://www.linkedin.com/company/electronics-club-mits-gwalior/about/' target='_shruti' ><i class="fa-brands fa-linkedin"></i></a>
            </li>

            <label for="theme" class="theme">
	             <span class="theme__toggle-wrap">
		            <input id="theme" class="theme__toggle" type="checkbox" role="switch" name="theme" value="dark" ></input>
		           <span class="theme__fill"></span>
		           <span class="theme__icon">
			         <span class="theme__icon-part"></span>
			         <span class="theme__icon-part"></span>
			         <span class="theme__icon-part"></span>
			         <span class="theme__icon-part"></span>
			         <span class="theme__icon-part"></span>
			         <span class="theme__icon-part"></span>
			         <span class="theme__icon-part"></span>
			         <span class="theme__icon-part"></span>
			         <span class="theme__icon-part"></span>
		        </span>
	          </span>
           </label>

          </ul>

          

    </div>
    
    {/* HAMBURGER MENU */}
    <div className='Hamburger-menu'>
          <a href='#' onClick={() => setShowMediaIcons(!showMediaIcons)}>
          <i class="fa-solid fa-bars"></i>
          </a>
    </div>
    </nav>
    </section> 
    
    {/* NAVBAR END */}

    {/* HOME START */}
    {/* { <section className='text-center'>
           <p className="heading">
              WELCOME  TO
              </p>
            <p className=" heading2">ELECTRONICS CLUB</p>
            <p className="heading3">
              Our electronics club is open to all, so come and be a part of a
               vibrant and welcoming community <br></br>that shares your love for
               electronics.
            </p>
            <button className="head-button"><p>EXPLORE..</p></button>
    </section> } */}
    </>
  )
}

export default Navbar;
