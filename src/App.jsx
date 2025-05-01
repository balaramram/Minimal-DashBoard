import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login_authentication/Login";
import ProtectedRoutes from "./pages/Login_authentication/ProtectedRoutes";
import { AuthProvider } from "./pages/Login_authentication/AuthContext";
import { SidebarProvider } from "./components/SlideBarContext";
import Layout from "./components/Layout";
import Dash_App from "./pages/DashBoard/Dash_app/Dash_App";
import Dash_Ecommerce from "./pages/DashBoard/Dash_Ecommerce";
import Dash_Analytics from "./pages/DashBoard/Dash_Analytics";
import Dash_Banking from "./pages/DashBoard/Dash_Banking";
import Dash_Booking from "./pages/DashBoard/Dash_Booking";
import Dash_Course from "./pages/DashBoard/Dash_Course";
import Dash_File from "./pages/DashBoard/Dash_File";
import Account from "./pages/Management/Account";
import Calender from "./pages/Management/Calender";
import Cards from "./pages/Management/Cards";
import Chat from "./pages/Management/Chat";
import Create from "./pages/Management/Create";
import Edit from "./pages/Management/Edit";
import FileManager from "./pages/Management/Filemanager";
import Kanban from "./pages/Management/Kanban";
import List from "./pages/Management/List";
import Mail from "./pages/Management/Mail";
import Profile from "./pages/Management/Profile";
import PathNotFound from "./pages/PageNotFound";
import Details from "./pages/Management/Details";
import { useAuth } from "./pages/Login_authentication/AuthContext";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route element={<Layout />}> 
          <Route path="/" element={<Dash_App />} />
          <Route path="/ecommerce" element={<Dash_Ecommerce />} />
          <Route path="/course" element={<Dash_Course />} />
          <Route path="/booking" element={<Dash_Booking />} />
          <Route path="/banking" element={<Dash_Banking />} />
          <Route path="/analytics" element={<Dash_Analytics />} />
          <Route path="/file" element={<Dash_File />} />
          <Route path="/account" element={<Account />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/details" element={<Details />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/chats" element={<Chat />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/filemanager" element={<FileManager />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/list" element={<List />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
      <Route path="/*" element={<PathNotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <SidebarProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </SidebarProvider>
    </AuthProvider>
  );
};

export default App;
