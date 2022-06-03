import axios from "axios";
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
const url = process.env.REACT_APP_BACKEND_URL

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean)
  }


  const isAuth = async () => {
    try {
      if(localStorage.token){
        const headers = {
          headers: {'token': localStorage.token}
        }
        const response = await axios.get(`${url}/auth/verify`, headers)
        response.data? setIsAuthenticated(true): setIsAuthenticated(true);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(()=>{
    isAuth();
  },[]);
  
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={isAuthenticated?<Dashboard  setAuth={setAuth}/>:<Navigate to='/login'/>} />
        <Route exact path="/login" element={isAuthenticated?<Navigate to='/'/>:<Login setAuth={setAuth}/>} />
        <Route exact path="/register" element={isAuthenticated?<Navigate to='/login'/>:<Register  setAuth={setAuth}/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
