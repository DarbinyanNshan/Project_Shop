import React from "react";
import Product_C from "../Product_C";
import img_1 from "../../../../assets/images/categories/cat_1.jpg"
import img_2 from "../../../../assets/images/categories/cat_2.jpg"
import img_3 from "../../../../assets/images/categories/cat_3.jpg"
import img_4 from "../../../../assets/images/categories/cat_4.jpg"





function Hearder_C (){
    return (
        <div>
            <Product_C 
            img_1= {img_1}
            img_2= {img_2}
            img_3= {img_3}
            img_4= {img_4}
            name="Category Name"
            text="100 Products"/>
        </div>
    )
}

export default Hearder_C;