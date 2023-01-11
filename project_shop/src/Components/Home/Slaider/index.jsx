import React from "react"
import "./style.css"
import { BsCheck } from "react-icons/bs";
import { ImTruck } from "react-icons/im";
import { TbArrowsLeftRight } from "react-icons/tb";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import offer_1 from "../../../assets/images/offer_1.jpg"
import offer_2 from "../../../assets/images/offer_2.jpg"











export const Slaider = () =>{
    


  
         
    return <>  
        <div className="slaider_icons">
            <div className="slaider_icon_1">
            <div className="slaider_icon"><BsCheck/></div>
            <p className="slaider_text">Quality Product</p>
            </div>
            <div className="slaider_icon_2">
            <div className="slaider_icon"><ImTruck/></div>
            <p className="slaider_text">Free Shipping</p>
            </div>
            <div className="slaider_icon_3">
            <div className="slaider_icon"><TbArrowsLeftRight/></div>
            <p className="slaider_text">14-Day Return</p>
            </div>
            <div className="slaider_icon_4">
            <div className="slaider_icon"><BsFillTelephoneForwardFill/></div>
            <p className="slaider_text">24/7 Support</p>
            </div>
        </div>
 
        </>
     
}



export const SlaiderImg = () =>{
    


  
         
    return <>  

    
       <div className="offer_component" >
        <img  className="offer_img" src={offer_1} alt="nkar" />
        <div className="offer_text">
            <h6 className="offer_price">Save 20%</h6>
            <h3 className="offer_title">Special Offer</h3>
            <button className="offer_btn">Shop Now</button>
        </div>

       </div>
       <div className="offer_component" >
        <img  className="offer_img" src={offer_2} alt="nkar" />
        <div className="offer_text">
            <h6 className="offer_price">Save 20%</h6>
            <h3 className="offer_title">Special Offer</h3>
            <button className="offer_btn">Shop Now</button>
        </div>

       </div>
 
        </>
     
}

