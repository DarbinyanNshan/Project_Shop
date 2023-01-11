import React from "react"
import "./style.css"
import offer_1 from "../../../assets/images/offer_1.jpg"
import offer_2 from "../../../assets/images/offer_2.jpg"




export const SlaiderImg_2 = () =>{
    
        return <div className="offer_images">  
                   <div className="offer_component_1" >
                             <img  className="offer_img_1" src={offer_1} alt="nkar" />
                             <div className="offer_text_1">
                             <h6 className="offer_price_1">Save 20%</h6>
                             <h3 className="offer_title_1">Special Offer</h3>
                             <button className="offer_btn_1">Shop Now</button>
                </div>
               </div>
                    <div className="offer_component_1" >
                              <img  className="offer_img_1" src={offer_2} alt="nkar" />
                              <div className="offer_text_1">
                              <h6 className="offer_price_1">Save 20%</h6>
                              <h3 className="offer_title_1">Special Offer</h3>
                              <button className="offer_btn_1">Shop Now</button>
               </div>
              </div>
         </div>
     
}

