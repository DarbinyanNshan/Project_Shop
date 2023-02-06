import React from "react";

// import {Admin} from "../AdminPage";
import {useEffect} from "react";
import { useGlobalContext } from "../../context";
import { Admin } from "../AdminPage";

import { GuestPages } from "../GuestPages";


export const AppComponent = ()=>{
    const {token,setToken} =  useGlobalContext()

    useEffect(()=>{
        let x = localStorage.getItem("token")
        if(x){
            setToken(x)
        }
    },[])

    return <>
        {token? <GuestPages /> : <Admin/>}
    </>
}