import React from "react";
import { useSidebar } from "../components/SlideBarContext";
import { useState } from "react";
import N_icon from "../assets/png/letter-n.png";
import left_arrow from "../assets/png/arrow_left_icon.png";
import right_arrow from "../assets/png/forward_arrow_icon.png";
import down_arrow from "../assets/svg/down_arrow.svg";
import user_1 from "../assets/avatar/user_1.webp";
import {Button} from "../components/Button";
import { Management, Overview,User} from "../constant/SlideBar_data";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { isExpanded, toggleSidebar } = useSidebar();
  const [isOpen, setIsOpen] = useState({
    overview: true,
    management: true,
    user:false
  });

  const toggleSection = (section) => {
    setIsOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="">
      <div className={`shadow fixed h-screen flex flex-col justify-between transition-all duration-300 ${isExpanded ? "w-75 px-4" : "w-20 px-2"} overflow-hidden`}>
        <div className="flex flex-col h-full justify-between overflow-y-auto py-10 scrollbar-hide">
        <div className="flex flex-col gap-5">
          
          <div className="flex items-center justify-between">
            <img className="size-10" src={N_icon} />
            <button onClick={toggleSidebar} className="flex items-center justify-center">
              <img className="size-5 transition-all duration-300 invert-50" src={isExpanded ? left_arrow : right_arrow} />
            </button>
          </div>





          <div className="relative">
            <button onClick={() => toggleSection("overview")} className={`w-full invert-100 hover:invert-0 duration-300 flex items-center gap- ${isExpanded ? "block" : "hidden"}`}>
              <img className="size-3" src={isOpen.overview ? down_arrow : right_arrow} />
              <p className="text-xs font-bold text-gray-500 transition-all duration-300 hover:ps-1 hover:text-black">OVERVIEW</p>
            </button>

            {/* {isOpen.overview && ( */}
              <div className={`mt-3 overflow-hidden transition-all duration-300 ${isOpen.overview?"h-max":"h-0"}`}>
                {Overview.map((item, i) => (
                  <Link key={i} to={item.link} className={`flex gap-3 items-center justify-center font-medium text-gray-500 
                    bg-white hover:bg-green-100 focus:text-green-600 focus:bg-green-200 rounded-lg transition-all duration-300 
                    ${isExpanded ? "flex-row py-2 px-3 gap-2 w-full justify-start " : "flex-col py-3 w-full text-xs"}`}>
                      
                    <img className="w-6 h-6 invert-40" src={item.icon} />
                    <p className={`${isExpanded ? "text-sm" : "text-xs text-center"}`}>{item.title}</p>
                  </Link>
                ))}
              </div>
            {/* )} */}
          </div>






            <div className="relative">
            <button onClick={() => toggleSection("management")} className={`w-full flex items-center gap-2 cursor-pointer ${isExpanded ? "block" : "hidden"}`}>
              <img className="size-3" src={isOpen.management ? down_arrow : right_arrow} alt="Toggle" />
              <p className="text-xs font-bold text-gray-500 transition-all duration-300 hover:ps-1 hover:text-black">MANAGEMENT</p>
            </button>

            <div className={`mt-3 overflow-hidden transition-all duration-300 ${isOpen.management ? "h-max" : "h-0"}`}>
              {Management.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center bg-white hover:bg-green-100 focus:bg-green-200 rounded-lg">
                  <Link to={item.link} onClick={() => toggleSection(index)} className={`flex gap-3 focus:text-green-600 text-gray-500 items-center justify-center font-medium  
                    ${isExpanded ? "flex-row py-2 px-3 gap-2 w-full justify-start " : "flex-col py-3 w-full text-xs"}`}>
                    <img className="w-6 h-6 invert-40" src={item.icon} alt={item.title} />
                    <p>{item.title}</p>
                  </Link>
                  {item.src && <img className="w-3 invert-40" src={item.src} alt={item.title} />}
                  
                  </div>
                  {item.submenu && isOpen[index] && (
                    <div className="p-4 pl-10"> 
                      {item.submenu.map((sub, i) => (
                        <Link key={i} to={sub.link} className="block text-gray-500 hover:text-black hover:bg-green-100 rounded-lg transition-all duration-300 mb-1 py-2 px-3">
                          {sub.title}
                        </Link>

                    //      {/* <button onClick={()=>toggleSection("user")} className={`flex items-center w-full font-medium  text-gray-500 bg-white hover:bg-green-100 focus:text-green-600 focus:bg-green-200 rounded-lg transition-all duration-300 
                    //   ${isExpanded ? "flex-row py-2 px-3 gap-2 w-full justify-start text-xl" : "flex-col py-3 w-full text-xs"}`}>
                    //     <div className="flex justify-between w-full items-center">
                    //        <div className="flex justify-center">
                    //          <img className="w-6 h-6 invert-40" src="/src/assets/svg/account.svg" />
                    //          <p className={`${isExpanded ? "text-sm" : "text-xs text-center"}`}>User</p>
                    //        </div>
                    //        <img className="size-5 invert-50" src={right_arrow} />
                    //     </div>
                       
                    // </button>
                    // <div className={`w-full overflow-hidden transition-all duration-300 ${isOpen.user ? "h-50" : "h-0"}`}>  
                    //   {User.map((item,i)=>(
                    //     <div key={i} className="flex justify-between text-gray-500 font-medium ms-9 py-1">
                    //       {item.title}
                    //       <img className="size-5 invert-50" src={right_arrow} />
                    //     </div>
                    //   ))}
                    // </div> */}


                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`flex flex-col items-center gap-1 ${isExpanded ? "block" : "hidden"}`}>
          <img className="rounded-full size-15" src={user_1} />
          <p className="font-medium transition-all duration-300 text-base">Jaydon Frankie</p>
          <p className="text-gray-500 transition-all duration-300 text-xs">demo@minimals.cc</p>
          <Button name="Upgrade to pro" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default SideBar;




// // import React, { useState } from "react";
// // import { useSidebar } from "../components/SlideBarContext";
// // import { Link } from "react-router-dom";
// // import N_icon from "../assets/png/letter-n.png";
// // import left_arrow from "../assets/png/arrow_left_icon.png";
// // import right_arrow from "../assets/png/forward_arrow_icon.png";
// // import down_arrow from "../assets/svg/down_arrow.svg";
// // import user_1 from "../assets/avatar/user_1.webp";
// // import { Button } from "../components/Button";
// // import { Management, Overview } from "../constant/SlideBar_data";

// // const SideBar = () => {
// //   const { isExpanded, toggleSidebar } = useSidebar();

// //   // Manage all sections dynamically
// //   const [isOpen, setIsOpen] = useState({});

// //   const toggleSection = (section) => {
// //     setIsOpen((prev) => ({
// //       ...prev,
// //       [section]: !prev[section] || false,
// //     }));
// //   };

// //   return (
// //     <div className="hidden xl:block">
// //       <div className={`shadow fixed h-screen flex flex-col justify-between transition-all duration-300 ${isExpanded ? "w-75 px-4" : "w-20 px-2"} overflow-hidden`}>
// //         <div className="flex flex-col h-full justify-between overflow-y-auto py-10 scrollbar-hide">
// //           {/* Logo & Toggle */}
// //           <div className="flex items-center justify-between">
// //             <img className="size-10" src={N_icon} />
// //             <button onClick={toggleSidebar} className="flex items-center justify-center">
// //               <img className="size-5 transition-all duration-300 invert-50" src={isExpanded ? left_arrow : right_arrow} />
// //             </button>
// //           </div>

// //           {/* Overview Section */}
// //           <div className="relative">
// //             <button onClick={() => toggleSection("overview")} className="w-full flex items-center gap-2 cursor-pointer">
// //               <img className="size-3" src={isOpen.overview ? down_arrow : right_arrow} />
// //               <p className="text-xs font-bold text-gray-500 transition-all duration-300 hover:ps-1 hover:text-black">OVERVIEW</p>
// //             </button>

// //             <div className={`mt-3 overflow-hidden transition-all duration-300 ${isOpen.overview ? "h-max" : "h-0"}`}>
// //               {Overview.map((item, i) => (
// //                 <Link key={i} to={item.link} className="flex items-center font-medium text-gray-500 hover:bg-green-100 focus:text-green-600 focus:bg-green-200 rounded-lg transition-all duration-300 px-3 py-2">
// //                   <img className="w-6 h-6 invert-40" src={item.icon} />
// //                   <p className="text-sm">{item.title}</p>
// //                 </Link>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Management Section */}
// //           <div className="relative">
// //             <button onClick={() => toggleSection("management")} className="w-full flex items-center gap-2 cursor-pointer">
// //               <img className="size-3" src={isOpen.management ? down_arrow : right_arrow} />
// //               <p className="text-xs font-bold text-gray-500 transition-all duration-300 hover:ps-1 hover:text-black">MANAGEMENT</p>
// //             </button>

// //             <div className={`mt-3 overflow-hidden transition-all duration-300 ${isOpen.management ? "h-max" : "h-0"}`}>
// //               {Management.map((item, index) => (
// //                 <div key={index}>
// //                   {/* Parent Item */}
// //                   <div onClick={() => toggleSection(item.title.toLowerCase())} className="flex items-center gap-2 cursor-pointer">
// //                     <img className="w-6 h-6" src={item.icon} alt={item.title} />
// //                     <p>{item.title}</p>
// //                   </div>

// //                   {/* Submenu (if exists) */}
// //                   {item.submenu && isOpen[item.title.toLowerCase()] && (
// //                     <div className="pl-4">
// //                       {item.submenu.map((sub, i) => (
// //                         <Link key={i} to={sub.link} className="block text-gray-500 hover:text-black">
// //                           {sub.title}
// //                         </Link>
// //                       ))}
// //                     </div>
// //                   )}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* User Info */}
// //         <div className={`flex flex-col items-center gap-1 ${isExpanded ? "block" : "hidden"}`}>
// //           <img className="rounded-full size-15" src={user_1} />
// //           <p className="font-medium text-base">Jaydon Frankie</p>
// //           <p className="text-gray-500 text-xs">demo@minimals.cc</p>
// //           <Button name="Upgrade to Pro" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SideBar;

