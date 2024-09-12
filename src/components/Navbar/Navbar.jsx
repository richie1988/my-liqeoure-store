import {useContext, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';
import { Search, ShoppingBasketOutlined } from '@mui/icons-material';


function Navbar({setShowLogin}) {

  const [menu, setMenu]=useState("home");
  const {getTotalCartAmount}=useContext(StoreContext);




  return (
    <div className='navbar'>
      <Link to="/"> <img src={logo} alt='logo' className='my-logo'/> </Link>
       <ul className='navbar-menu'>
        <Link to='/' onClick={()=> setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#explore-drinks' onClick={()=> setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
        <a href='#appdownload' onClick={()=> setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=> setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</a>
       </ul>
       <div className="navbar-right">
        <Search/>
        <div className="navbar-search-icon">
          <Link to="/cart"><ShoppingBasketOutlined/></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=> setShowLogin(true)} className="sign-btn">Sign in</button>
       </div>
    </div>
  )
}

export default Navbar
