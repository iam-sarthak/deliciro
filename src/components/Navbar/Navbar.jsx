import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets.js'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const[menu, setMenu] = useState("menu");
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo'/>
      <ul className='navbar-menu'>
        <Link onClick={()=>setMenu("home")}className={menu==="home"?"active":""}>home</Link>
        <a href='#exploremenu' onClick={()=>setMenu("menu")}className={menu==="menu"?"active":""}>menu</a>
        <a href='#footer' onClick={()=>setMenu("contact us")}className={menu==="contact us"?"active":""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar