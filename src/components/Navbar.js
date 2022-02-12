// import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import User from './User';

function Navbar({userimg, username}) {
    return <div className='navbar'>
        <Link to='/' className='logo'><img src='/rsc/img/dahablogo.svg' alt='Dahabshiil Bank'/></Link>
        <User userimg={userimg} username={username}/>
    </div>;
}

export default Navbar;
