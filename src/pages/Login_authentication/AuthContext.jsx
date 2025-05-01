// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     const login = () => setIsAuthenticated(true);

//     return (
//         <AuthContext.Provider value={{ isAuthenticated, login}}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);



import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    const AUTH_PASSKEY = localStorage.getItem("UserName");
    if (AUTH_PASSKEY) {
      setIsAuthenticated(true);
    }
  }, []);
  

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("UserName");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
