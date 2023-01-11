import React from "react";
import Product_F from "../Products_F";

import img_1 from "../../../../assets/images/featured/product_1.jpg"
import img_2 from "../../../../assets/images/featured/product_2.jpg"
import img_3 from "../../../../assets/images/featured/product_3.jpg"
import img_4 from "../../../../assets/images/featured/product_4.jpg"
import img_5 from "../../../../assets/images/featured/product_5.jpg"
import img_6 from "../../../../assets/images/featured/product_6.jpg"
import img_7 from "../../../../assets/images/featured/product_7.jpg"
import img_8 from "../../../../assets/images/featured/product_8.jpg"



function Hearder_F (){
    return (
        <div>
           <Product_F
           img_1={img_1}
           img_2={img_2}
           img_3={img_3}
           img_4={img_4}
           img_5={img_5}
           img_6={img_6}
           img_7={img_7}
           img_8={img_8}
           title="Product Name Goes Here"
           price="$123.00"

               />
        </div>
            
    )
}

export default Hearder_F;