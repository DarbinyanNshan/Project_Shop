import React from "react";
import "./style.css"
import {NavBar} from "../NavBar"
import { Hearder } from "../Home/hearder";
import {Router}  from "../Router"


export const GuestPages = ()=>{

    return <div className="guestpage">
             <NavBar/>
        <div className="main">
          <Hearder/>
          <Router/>
        </div>
    </div>
}