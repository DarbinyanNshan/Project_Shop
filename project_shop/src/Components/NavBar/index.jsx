import React from "react"
import "./style.css"
import { useState } from "react"
import { FiSearch } from "react-icons/fi";
import { TfiAngleDown } from "react-icons/tfi";
import { TfiViewList } from "react-icons/tfi";
import { BiChevronRight } from "react-icons/bi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { BsBasket3Fill } from "react-icons/bs";
import { FaCreativeCommonsZero } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";




export const NavBar = () =>{
    const [btn_1,setBtn_1] = useState(false)
    const Change_1 = ()=>{
        setBtn_1(!btn_1)
      } 
   
         
    return <>  
    <div className="navbar">
        <ul>
            <li> About</li>
            <li>Contact</li>
            <li>Help</li>
            <li>FAQs</li>
        </ul>
        <button className="navbar_btn1">My Account</button>
    
        <button className="navbar_btn2">USD</button>
        <button className="navbar_btn3">EN</button>


    </div>
       <div className="navbar_logo">
        <a className="logo" href="https://www.free-css.com/free-css-templates" >
            <span className="logo_1">MULTI</span>
            <span className="logo_2">SHOP</span>
        </a>
        
        <div className="search">
        <input className="input_nav" type="search"  placeholder="Search for products"/>
        <span className="input_icon"><FiSearch/></span>
        </div>
        <div className="namer_nav">
            <span className="servic_nav">Customer Service</span><br/>
            <span className="servic_number">+012 345 6789</span>

        </div></div>

        <div className="navbar_menu">
            <div>
            <button className="btn_menu" onClick={Change_1}>
                <div className="btn_menu_i1"><TfiViewList/></div>
                 Categories 
                <div className="btn_menu_i2"><TfiAngleDown/></div>
                 </button>
                 
            {btn_1? <div>
                <ul className="btn_1_menu">
                    <li className="li_1" >Dresses<div className="li_1_i"> <BiChevronRight/>
                    <div className="li_1_menu">
                        <button className="limenu_btn">Men's Dresses</button>
                        <button className="limenu_btn">Women's Dresses</button> 
                        <button className="limenu_btn">Baby's Dresses</button>
                        </div></div></li>
                    <li className="li_1">Shirts</li>
                    <li className="li_1">Jeans</li>
                    <li className="li_1">Swimwear</li>
                    <li className="li_1">Sleepwear</li>
                    <li className="li_1">Sportswear</li>
                    <li className="li_1">Jumpsuits</li>
                    <li className="li_1">Blazers</li>
                    <li className="li_1">Jackets</li>
                    <li className="li_1">Shoes</li>
                     </ul>
            </div>: null } 
            </div>
            <div>
                <div className="ul_menu">
                  <NavLink to="/" className="navlink">Home</NavLink>
                  <NavLink to="/shop" className="navlink">Shop</NavLink>
                   <NavLink to="shopdetail" className="navlink">Shop Detail</NavLink>
                   <NavLink  to="/pages" className="navlink">Pages <FaAngleDown /> 
                   <div className="dropdown2">
                                    <button className="dropdownItem">Shopping Cart</button><br/>
                                    <button className="dropdownItem">Checkout</button>
                                </div></NavLink>
                   <NavLink to="/contact" className="navlink">Contact</NavLink>
                    </div>
            </div>

            <div className="navbar_icon">
               <div className="heart">  <BsFillSuitHeartFill/> </div>
                <div className="zero"><FaCreativeCommonsZero/></div>
                <div className="baxket"><BsBasket3Fill/></div>
                <div className="zero"> <FaCreativeCommonsZero/> </div>
               
            </div>
         
            

        </div>


        </>
     
}