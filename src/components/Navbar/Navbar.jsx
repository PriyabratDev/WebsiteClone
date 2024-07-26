import React from "react";
import style from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Nimg } from "../nimg";
import { Location } from "./Location";
import Login from "../../pages/User/Login/Login";
import { useSelector } from "react-redux";
import { ProfileModal } from "../../pages/User/Profile/ProfileModal";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar({ c }) {
  const { isAuth } = useSelector((store) => store.login);
  return (
    <>
      <nav className={style.Navbar} style={{ backgroundColor: c }}>
        
        <NavLink to="/">
          <div className={style.logo}>
            <Nimg />
          </div>
        </NavLink>
       
        <div className={style.middle}>
          <Link to="/">
            <div className={style.logo1}>
              <Nimg />{" "}
            </div>
          </Link>
          <Link to="/fitness">
            <h5>FITNESS</h5>
          </Link>
          <Link to="/care">
            <h5>CARE</h5>
          </Link>
          <Link to="/mind">
            {" "}
            <h5>MIND</h5>
          </Link>
          <Link to="/doctor">
            <h5>DOCTOR</h5>
          </Link>
        </div>
       

        <div className={style.right}>
          <span>
            <Location />
          </span>
          <div>
           <Link to="/admin"><button className={style.getapp}>ADMIN PAGE</button></Link> 
          </div>
          <div>
            {isAuth ? (
              <ProfileModal />
              
            ) : (
              <Login />
            )}
          </div>
          <div>
         
            <Link to="/cart">
              <ShoppingCartIcon />
            </Link>
            
          </div>
          </div>
        
      </nav>
      <div id={style.Resnavbar}>
          <div id={style.menu}>
            <HamburgerMenu />
          </div>
          <a href="/" className={style.logo123}>
            <div className={style.logo123}>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_35,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/curefit-logo-white.svg"
                alt="logo"
                className={style.logoImg}
              />
            </div>
          </a>
          <div id={style.ResPlace}>BHUBANESWAR</div>
        </div>
    </>
    
  );
}
