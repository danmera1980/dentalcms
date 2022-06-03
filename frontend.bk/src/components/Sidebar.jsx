import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTooth, faHome, 
    faGlobe,
    faIdBadge,
    faSliders,
    faUserDoctor, faStaffAesculapius, 
    faUsers, faClock,
    faPrescription,
    faFilePen} from '@fortawesome/free-solid-svg-icons';
export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="logo">
            <FontAwesomeIcon icon={faTooth} size="2xl"/>
            <h1>Dental CMS</h1>
        </div>
        <div className="menu">
            <div className="option active">
                <FontAwesomeIcon icon={faHome}/>
                <Link to={"/dashboard"}>Dashboard</Link>
            </div>
            <div className="option">
                <FontAwesomeIcon icon={faUserDoctor}/>
                <Link to={"/dentist"}>Dentist</Link>
            </div>
            <div className="option">
                <FontAwesomeIcon icon={faStaffAesculapius}/>
                <Link to={"/staff"}>Staff</Link>
            </div>
            <div className="option">
                <FontAwesomeIcon icon={faUsers}/>
                <Link to={"/patient"}>Patients</Link>
            </div>
            <div className="option">
                <FontAwesomeIcon icon={faClock}/>
                <Link to={"/schedule"}>Schedules</Link>
            </div>
            <div className="option">
                <FontAwesomeIcon icon={faPrescription}/>
                <Link to={"/prescription"}>Prescription</Link>
            </div>
            <div className="option">
                <FontAwesomeIcon icon={faFilePen}/>
                <Link to={"/treatment"}>Treatment</Link>
            </div>
            <div className="option">
                <FontAwesomeIcon icon={faGlobe}/>
                <Link to={"/website"}>Website</Link>
            </div>
            <div className="option">
                <FontAwesomeIcon icon={faIdBadge}/>
                <Link to={"/profile"}>Profile</Link>
            </div>
            <div className="option">
                <FontAwesomeIcon icon={faSliders}/>
                <Link to={"/settings"}>Settings</Link>
            </div>
        </div>
    </div>
  )
}
