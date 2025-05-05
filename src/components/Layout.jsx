import React from "react";
import { useSidebar } from "../components/SlideBarContext";
import { Outlet } from "react-router-dom";
import SlideBar from "../components/SideBar";
import NavBar from "./NavBar";

const Layout = () => {

    const { isExpanded, toggleSidebar } = useSidebar();

  return (
    <div className="flex w-screen">
      <div className="z-50"><SlideBar /></div>
      
      <div className={` md:flex-1 transition-all duration-300 ${isExpanded?"lg:ml-70":"md:ml-11 lg:ml-18"}`}>
        <NavBar />
        <main className="lg:absolute md:p-10 mt-10"><Outlet /></main>
      </div>
    </div>
  );
};

export default Layout;
