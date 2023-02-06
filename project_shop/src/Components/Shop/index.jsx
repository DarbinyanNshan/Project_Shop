import React from "react"
import "./style.css"
import { AiFillWindows } from "react-icons/ai";
import { TfiViewList } from "react-icons/tfi";
import Hearder_F from "../Home/Featured/Hearder_F";







export const Shop = () =>{
  
         
    return <>
    <div className="shop_navbar">
        <ul className="shop_ul">
            <li className="shop_li">Home</li>  
            /
            <li className="shop_li">Shop</li>
            /
            <li className="shop_li"> Shop List</li>
        </ul>
    </div>
    <div className="shop_title_1">
    <p className="shop_title">FILTER BY PRICE</p>
    <div className="shop_window"> <AiFillWindows/></div>
    <div className="shop_list"> <TfiViewList/></div>


    </div>

    <div className="shop_component">
        <div className="filter">
            <div className="price ">
            <input checked  className="price_inp" type="checkbox"/>
             <label className="price_title">All Price</label>
             <p className="price_number price1"> 1000</p>
            </div>
            <div className="price ">
            <input className="price_inp" type="checkbox"/>
             <label className="price_title">$0 - $100</label>
             <p className="price_number price2"> 150</p>
            </div>
            <div className="price">
            <input className="price_inp" type="checkbox"/>
             <label className="price_title">$100 - $200</label>
             <p className="price_number"> 295</p>
            </div>
            <div className="price">
            <input className="price_inp" type="checkbox"/>
             <label className="price_title">$200 - $300</label>
             <p className="price_number"> 246</p>
            </div>
            <div className="price">
            <input className="price_inp" type="checkbox"/>
             <label className="price_title">$300 - $400</label>
             <p className="price_number"> 145</p>
            </div>
            <div className="price">
            <input className="price_inp" type="checkbox"/>
             <label className="price_title">$400 - $500</label>
             <p className="price_number"> 168</p>
            </div>
        <p className="shop_title1">FILTER BY COLOR</p>
            
            <div className="filter_color">
            <div className="price ">
                <input  checked  className="price_inp" type="checkbox"/>
                <h4 className="price_title">All Color</h4>
                <p className="price_number price1"> 1000</p>
            </div>
            <div className="price ">
                <input className="price_inp" type="checkbox"/>
                <h4 className="price_title">Black</h4>
                <p className="price_number price3"> 150</p>
            </div>
            <div className="price ">
                <input className="price_inp" type="checkbox"/>
                <h4 className="price_title">White</h4>
                <p className="price_number price4"> 295</p>
            </div>
            <div className="price ">
                <input className="price_inp" type="checkbox"/>
                <h4 className="price_title">Red</h4>
                <p className="price_number price5"> 246</p>
            </div>
            <div className="price ">
                <input className="price_inp" type="checkbox"/>
                <h4 className="price_title"> Blue</h4>
                <p className="price_number price6"> 145</p>
            </div>
            <div className="price ">
                <input className="price_inp" type="checkbox"/>
                <h4 className="price_title"> Green</h4>
                <p className="price_number price4">168</p>
            </div>
            
            
            </div>
            <p className="shop_title1">FILTER BY SIZE</p>
            
            <div className="filter_color">
            <div className="price ">
                <input checked className="price_inp" type="checkbox"/>
                <h4 className="price_title">All Size</h4>
                <p className="price_number price7"> 1000</p>
            </div>
            <div className="price ">
                <input className="price_inp" type="checkbox"/>
                <h4 className="price_title">XS</h4>
                <p className="price_number price8"> 150</p>
            </div>
            <div className="price ">
                <input className="price_inp" type="checkbox"/>
                <h4 className="price_title">S</h4>
                <p className="price_number price9"> 295</p>
            </div>
            <div className="price ">
                <input className="price_inp" type="checkbox"/>
                <h4 className="price_title">M</h4>
                <p className="price_number price10"> 246</p>
            </div>
            <div className="price ">
                <input className="price_inp" type="checkbox"/>
                <h4 className="price_title"> L</h4>
                <p className="price_number price11"> 145</p>
            </div>
            <div className="price ">
                <input className="price_inp" type="checkbox"/>
                <h4 className="price_title"> XL</h4>
                <p className="price_number price12">168</p>
            </div>
            
            
            </div>
            </div>
            
             
        <div className="shop_products">
            <Hearder_F/>
      </div>
    </div>
        </>
     
}