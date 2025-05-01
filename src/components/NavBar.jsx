import React, { useState } from 'react'
import N_icon from "../assets/png/letter-n.png";
import user_1 from "../assets/avatar/user_1.webp";
import search from "../assets/svg/search.svg"
import menu from "../assets/svg/menu.svg"
import flag from "../assets/svg/country_flag.svg"
import bell from "../assets/svg/bell.svg"
import person from "../assets/svg/person.svg"
import settings from "../assets/svg/settings.svg"
import { useSidebar } from "../components/SlideBarContext";
import { Team } from '../constant/Props';
import OutsideClickHandler from "react-outside-click-handler";
import { useAuth } from '../pages/Login_authentication/AuthContext';


const NavBar = () => {

    const { isExpanded} = useSidebar();
    const [isOpen,setIsOpen]=useState({team:false,flag:false,contact:false,bell:false,settings:false,user:false})
    const {logout} =useAuth()

    const toggleSection=(section)=>{
      setIsOpen((prev)=>({
        ...prev,[section]:!prev[section],
        
      }))
      
    }

  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
    <div>
      <div className={`bg-gray-50/45 py-3 fixed flex justify-between items-center w-screen px-5 xl:transition-all xl:duration-300 z-50 ${isExpanded ?"xl:w-305 ms-5":"xl:w-361 ms-2"} `}>
        
        <div>
          <Team className={`${isOpen.team?"bg-gray-50/45 px-1 rounded-md":"focus:bg-gray-200/0  px-1"}`} onClick={()=>{toggleSection("team")}} name="Team 1" icon={N_icon} />

          {/* {isOpen.team && ( */}
          <div className={`absolute mt-2 rounded-lg flex flex-col bg-gradient-to-bl from-sky-100 via-white to-red-100 overflow-hidden transition-all duration-300 ${isOpen.team ? "h-max  p-2" : "h-0"}`}>
            <Team className="gap-15 focus:bg-gray-200 hover:bg-gray-50 py-2 px-3 rounded-lg" name="Team 2" icon={N_icon}/>
            <Team className="gap-15 focus:bg-gray-200 hover:bg-gray-50 py-2 px-3 rounded-lg" name="Team 2" icon={N_icon}/>
            <Team className="gap-15 focus:bg-gray-200 hover:bg-gray-50 py-2 px-3 rounded-lg" name="Team 2" icon={N_icon}/>
          </div>
          {/* )} */}
        </div>

        <div className="flex gap-5">
          <button className="flex items-center md:bg-gray-300 px-3 py-1 gap-2 rounded-2xl">
            <img className="size-5" src={search} />
            <div className="flex items-center bg-white px-1 gap-1 rounded-md">
              <img className="hidden md:block size-2" src={menu}/>
              <p className="text-sm hidden md:block">K</p>
            </div>
          </button>

          <button onClick={()=>{toggleSection("flag")}}>
            <img className="size-6" src={flag} />
            {/* {isOpen.flag&& */}
            <div className={`absolute right-55 mt-2 rounded-lg flex flex-col bg-gradient-to-bl from-sky-100 via-white to-red-100 transition-all duration-300 overflow-hidden ${isOpen.flag ? "w-50 h-50 p-2 " : "w-0 h-0"} `}>
              <p className="gap-15 focus:bg-gray-200 hover:bg-gray-50 py-2 px-3 rounded-lg">country</p>
            </div>
            {/* } */}
          </button>

          <button onClick={()=>{toggleSection("bell")}}>
            <img className="size-6" src={bell} />
            
            <div className={`absolute bg-white shadow-2xl rounded-xl bg-gradient-to-bl from-blue-100 via-purple-100 to-pink-100 h-screen transition-all duration-300 overflow-hidden ${isOpen.bell ? "right-0 w-70" : "right-0 w-0"}`}>
              <p>opened</p>
            </div>
          </button>

          <button onClick={()=>{toggleSection("contact")}}>
            <img className="size-6" src={person} />
            {isOpen.contact&&
            <div className={`absolute right-30 mt-2 rounded-lg flex flex-col bg-gradient-to-bl from-sky-100 via-white to-red-100 overflow-hidden transition-all duration-300 ${isOpen.contact ? "w-50 h-50 " : "w-0 h-0"} `}>
              <p className="gap-15 focus:bg-gray-200 hover:bg-gray-50 py-2 px-3 rounded-lg">Contact(20)</p>
            </div>
            }
          </button>
          
          <button onClick={()=>{toggleSection("settings")}}>
            <img className="size-6 animate-spin" src={settings} />
           
          </button>
           <div className={`absolute  bg-white shadow-2xl rounded-xl bg-gradient-to-bl from-blue-100 via-purple-100 to-pink-100 h-screen transition-all duration-300 overflow-hidden ${isOpen.settings ? "right-0 w-90 p-6" : "right-0 w-0"}`}>
              <div className="flex justify-between items-center pe-6">
                <p className="font-medium text-xl">Settings </p>
                <button className="border rounded-full px-3 pb-1 text-2xl hover:text-red-500" onClick={() => toggleSection("settings")} >x</button>
              </div>




            </div>
          
          <button onClick={()=>{toggleSection("user")}}>
            <div className="border rounded-full">
              <img className="size-5 xl:size-10 p-1 rounded-full" src={user_1} />
              <div className={`absolute bg-white shadow-2xl rounded-xl bg-gradient-to-bl from-blue-100 via-purple-100 to-pink-100 h-screen transition-all duration-300 overflow-hidden ${isOpen.user ? "right-0 w-70" : "right-0 w-0"}`}>
              <p>this is user</p>
              <button onClick={()=>logout()} className='rounded-full p-2 text-2xl border'>logout</button>
            </div>
            </div>
          </button>
        </div>
        
      </div>
    </div>
     </OutsideClickHandler>
  )
}

export default NavBar
