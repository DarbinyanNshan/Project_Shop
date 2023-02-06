import React, {useState} from "react";
import "./style.css"
import {GetUsers, SetUser} from "../Platform/Api";
import { useGlobalContext } from "../../context";



export const Admin = ()=>{
    const {profile, setProfile, arr, setArr} =  useGlobalContext()
    const [error,setError] = useState({
        errorEmail : '',
        errorPassword : '',
    })

    const Change = (e)=>{
        setProfile({...profile,[e.target.name]:e.target.value})
    }



    const validation = ()=>{
        let valid = true

        const errors = {
            errorEmail : "",
            errorPassword: ''
        }
        if(!profile.email){
            errors.errorEmail = "Required email"
            valid = false
        }
        if(!profile.password){
            errors.errorPassword = "Required password"
            valid = false
        }
        setError(errors)

        return valid
    }
    const Call = async ()=>{
        if(validation()) {
            const result = await SetUser(profile)
            if (result.data) {
                localStorage.setItem("token", result.data._id)
                // localStorage.setItem("token",lis[0]._id)
                window.location.reload()
                // console.log(result.data)
            }
        }
    }

    const Sign = async ()=>{
        const result = await GetUsers()
        if(result.data){
            const arr = []
            console.log(result.data)
            // setArr(result.data.filter(x => x.email === profile.email))
            arr.push(result.data.filter(x => x.email === profile.email))
            if(arr[0][0]){
                localStorage.setItem("token", arr[0][0]._id)
                // setArr(arr)
                window.location.reload()
            }
            // Set(result.data[0]._id)
        }

    }

    // const Set = (y)=>{
    //     if(arr[0]){
    //         // Set(result.data._id)
    //         console.log(y)
    //         localStorage.setItem("token", y)
    //         window.location.reload()
    //     }
    //
    // }

    return <div className="P-admin">
        {console.log(arr)}
        <input type="email" name="email" onChange={Change}/>
        {error.errorEmail? <p>{error.errorEmail}</p> : null}
        <input type="password" name="password"  onChange={Change}/>
        {error.errorPassword? <p>{error.errorPassword}</p> : null}

        <button onClick={Sign}>Sign in</button>
        <button onClick={Call}>Registration</button>
    </div>
}