import React from "react";
import { useSidebar } from "../components/SlideBarContext";
import { Outlet } from "react-router-dom";
import SlideBar from "../components/SideBar";
import NavBar from "./NavBar";

const Layout = () => {

    const { isExpanded, toggleSidebar } = useSidebar();

  return (
    <div className="flex ">
      <SlideBar />
      <div className={` flex-1 transition-all duration-300 ${isExpanded?"xl:ml-70":"xl:ml-18"}`}>
        <NavBar />
        <main className="absolute p-10 xl:mt-10"><Outlet /></main>
      </div>
    </div>
  );
};

export default Layout;
