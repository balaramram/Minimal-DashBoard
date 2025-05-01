import React from 'react'
import Login_input from "../../components/Login_input"
import { Button } from "../../components/Button"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from 'react-router-dom'
import {useAuth} from "../Login_authentication/AuthContext"

const USERNAME = "minimals";
const PASSWORD = "2Minimal";

const Login = () => {

    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate()
    const { setIsAuthenticated }=useAuth();

    const handleSignIn = () => {
        if (user === USERNAME && password === PASSWORD) {
            localStorage.setItem("UserName", user);
            localStorage.setItem("UserPassword", password);
            setIsAuthenticated(true);
            navigate("/");
            alert("logedin");
        } else {
            toast.error("Check you credentials and try again");
        }
    }
    
  return (
    <div>
        <div className="lg:grid lg:grid-cols-3">
            <div className="hidden lg:block">
            <div className="col-span-1 bg-sky-50 h-screen flex flex-col justify-center items-center text-black">
                <p className="font-bold text-3xl pb-3">Hi, Welcome back</p>
                <p>More effectively with optimized workflows.</p>
                <img className="p-10 size-100" src="/src/assets/png/Login-img.png"/>
            </div>
            </div>

            <div className="lg:col-span-2  rounded-2xl p-10 md:p-30 lg:p-0">
                <div className="h-full flex flex-col justify-center lg:ps-[10rem] xl:ps-[20rem] gap-5 ">
                    <p className="text-2xl font-bold font-serif">Sign in to your account</p>
                    <div className="flex text-sm gap-2 text-gray-500">
                        <p>Don’t have an account?</p>
                        <button className="text-green-400 font-medium cursor-pointer"> Get started</button>
                    </div>
                    <div className="flex flex-col lg:w-max">
                        <div className="flex items-center justify-center mb-4  bg-blue-200 px-2 rounded-md py-3">
                            <img className="size-6" src="/src/assets/png/i_icon.png"/>
                            <p className="ms-3 items-center flx justify-center text-sm">Use <span className="font-medium">demo@minimals.cc</span> with password<span className="font-medium"> @2Minimal</span></p>
                        </div>
                        
                        <Login_input 
                         label="Email address"
                        type="email"
                        value={user}
                        onChange={(e)=>setUser(e.target.value)} />
                        
                        <button className="cursor-pointer text-sm text-end">Forgot password?</button>

                        <Login_input
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}/>

                        <Button 
                        name="Sign in"
                        onClick={handleSignIn}
                        className="w-full"/>
                        <ToastContainer/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
