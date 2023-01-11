import React from "react"
import Carousel_img from "../Carousel_Img"
import Carousel_Vendor from "../Carousel_Vendor"

import { Categories } from "../Categories"
import { Featured } from "../Featured"
import { Slaider, SlaiderImg } from "../Slaider"
import { SlaiderImg_2 } from "../SlaiderImg"






export const Hearder = () =>{
  
         
    return <>
      <Carousel_img/> 
      <SlaiderImg/>
      <Slaider/>
      <Categories/>
      <Featured/>
      <SlaiderImg_2/>
      <Featured/>
      <Carousel_Vendor/>

        </>
     
}