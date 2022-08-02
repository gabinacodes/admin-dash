import React from 'react';
import Image from '../image/image'
import { Link, Outlet } from 'react-router-dom';
import Styles from   "../styles/modules/header.module.scss"





function Header() {
  return (
    <div>
       <div  className={Styles.nav1}>
        <img src={Image.logo} alt="logo"/>
        <img src={Image.hamburger} className={Styles.ham} alt="logo"/>
     <div  className={Styles.di1} >  <div className={Styles.input} >
       <input type="text" placeholder='search'/>
        <button>Search</button>
       </div>
       <div  className={Styles.nav}>
       <img src={Image.account} alt="logo"/>
       <p>Account</p>
       </div>
       <div  className={Styles.nav}>
       <img src={Image.wishlist} alt="logo"/>
       <p>Wishlist</p>
       </div>
       <div  className={Styles.nav}>
       <img src={Image.cart} alt="logo"/>
       <p>Cart</p>
       </div></div>
      </div> 
      <div className={Styles.nav2}>
     <div className={Styles.n2}> <img src={Image.hamburgerW}  className={Styles.ham1}  alt="logo"/></div>
      <Link to="/">Home</Link>
        <a href='/'> About Us</a>
        <a href='/'>Services </a>
        <a href='/'>Stock</a>
        <a href='/'>Hire </a>
        <a href='/'>Gallery</a>
        <a href='/'>Consultation</a>
        <a href='/'>Parts & Maintenance </a>
        <a href='/'>FAQs</a>
        <a href='/'>Contact Us</a>
      </div>
      <Outlet/>
    </div>
  );
}

export default Header;
