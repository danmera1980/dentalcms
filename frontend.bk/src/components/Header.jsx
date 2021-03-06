import React from 'react';
import {FaRegBell} from 'react-icons/fa';
import {GoSignOut} from 'react-icons/go';

export default function Header({name, logout}) {
    console.log(name);
  return (
    <div className='header'>
        <h2>Dashboard</h2>
        <div className="logged">
            <div className="notification">
                <FaRegBell/>
            </div>
            <div className="user">{name}</div>
            <button className='btn btn-primary' onClick={e => logout(e)}>
                <GoSignOut/>
            </button>
        </div>
    </div>
  )
}
