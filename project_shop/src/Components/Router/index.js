import React  from "react";
import { Footer } from '../../Components/Footer';
import { Hearder } from '../../Components/Home/hearder';
import { NavBar } from '../../Components/NavBar';
import { Route, Routes } from "react-router-dom"
import { Shop } from '../../Components/Shop';
import { Dashbord } from "../Dashbord";

export const Router = () => {


    return (
        <div>
             <NavBar/>
             <Routes>
                <Route path="/*"  element={<Hearder/>}  />
                <Route path="/shop"  element={<Shop/>}  />
                {/* <Route path = "/dashbord" element={<Dashbord/>} /> */}
             </Routes>
             <Footer/>
        </div>
    )
}