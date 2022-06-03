import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
// import 'react-toastify/dist/ReactToastify.css';
const url = process.env.REACT_APP_BACKEND_URL;

export default function Dashboard({setAuth}) {

    const [name, setName] = useState("");

    const getName = async ()=>{
        const headers = {
            headers: {'token': localStorage.token}
        }
        try {
            const response = await axios.get(`${url}/dashboard/`, headers);
            setName(response.data.email)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=> {
        getName();
    },[]);

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
        // toast.success("Logged out successfully")
    }
  return (
    <Fragment>
        {/* <ToastContainer /> */}
        <div className="dashboard">
            <Sidebar/>
            <div className="main">
                <Header name={name} logout={logout}/>
                <h1>Dashboard</h1>
                <h2>Hi {name}!</h2>
            </div>
        </div>
    </Fragment>
  )
}
