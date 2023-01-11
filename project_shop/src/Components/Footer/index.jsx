import React from "react";
import "./style.css"
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";





export const Footer   = () =>{


    return ( <div className="footer">
            <div className="footer_1">
                <h4 className="footer_title">GET IN TOUCH</h4>
                <p className="footer_text">No dolore ipsum accusam no lorem. 
                                           Invidunt sed clita kasd clita et et dolor sed dolor.
                                           Rebum tempor no vero est magna amet no</p>
                <h5 className="footer_addres"><div className="footer_addres_icon"><FaMapMarkerAlt/></div>
                <span className="footer_addres_text">123 Street, New York, USA</span></h5> 
                <h5 className="footer_messeg"><div className="footer_messeg_icon"><MdEmail/></div>
                <span className="footer_messeg_text">mail@domain.com</span></h5>  
                <h5 className="footer_number"><div className="footer_number_icon"><BsFillTelephoneFill/></div>
                <span className="footer_number_text">+012 345 67890</span></h5> 
            </div>

            <div className="footer_2">
            <h4 className="footer_title">QUICK SHOP</h4>
            <ul className="footer_table" >
                <li><FaAngleRight/><p className="table_text">Home</p></li>
                <li><FaAngleRight/><p className="table_text"> Our Shop</p></li>
                <li><FaAngleRight/><p className="table_text"> Shop Detail</p></li>
                <li><FaAngleRight/><p className="table_text">Shopping Cart</p> </li>
                <li><FaAngleRight/><p className="table_text">Checkout</p></li>
                <li><FaAngleRight/> <p className="table_text">Contact Us</p></li>
            </ul>
            </div>

            <div className="footer_3">
            <h4 className="footer_title">MY ACCOUNT</h4>
            <ul className="footer_table" >
                <li><FaAngleRight/><p className="table_text">Home</p></li>
                <li><FaAngleRight/><p className="table_text"> Our Shop</p></li>
                <li><FaAngleRight/><p className="table_text"> Shop Detail</p></li>
                <li><FaAngleRight/><p className="table_text">Shopping Cart</p> </li>
                <li><FaAngleRight/><p className="table_text">Checkout</p></li>
                <li><FaAngleRight/> <p className="table_text">Contact Us</p></li>
            </ul>
            </div>

            <div className="footer_4">
            <h4 className="footer_title">NEWSLETTER</h4>
            <p className="footer_text_4">Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
            <input className="footer_inp" type="text" placeholder="Your Email Address"/><button className="footer_btn">Sign up</button>
            <h4 className="footer_title_4">FOLLOW US</h4>
            <div className="footer_icons">
                <div className="icon_twit"><FaTwitter/></div>
                <div className="icon_face"><FaFacebookF/></div>
                <div className="icon_in"><FaLinkedinIn/></div>
                <div className="icon_insta"><FaInstagram/></div>
            </div>
            </div>
            
               
    
    </div>

    )

}