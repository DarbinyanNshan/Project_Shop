import React from "react";
import './style.css';

import Vendor1 from "../../../assets/images/vendor/vendor-1.jpg";
import Vendor2 from "../../../assets/images/vendor/vendor-2.jpg";
import Vendor3 from "../../../assets/images/vendor/vendor-3.jpg";
import Vendor4 from "../../../assets/images/vendor/vendor-4.jpg";
import Vendor5 from "../../../assets/images/vendor/vendor-5.jpg";
import Vendor6 from "../../../assets/images/vendor/vendor-6.jpg";
import Vendor7 from "../../../assets/images/vendor/vendor-7.jpg";
import Vendor8 from "../../../assets/images/vendor/vendor-8.jpg";
import { VendorCarousel } from "../VendorCarousel";


export default function Carousel_Vendor () {

 
    const vendors = [Vendor1, Vendor2, Vendor3, Vendor4, Vendor5, Vendor6, Vendor7, Vendor8];
    
    return( <>
              
                <div className="vendor">
                <VendorCarousel vendors={vendors}/>
                </div>
                </>)
}