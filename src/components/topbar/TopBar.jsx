import React from 'react'
import './topbar.css'
import { BsFacebook, BsInstagram, BsTwitter, BsPinterest, BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function TopBar() {
    const user = false;
  return (
    <nav className='top'>
        <div className="topLeft">
            <BsFacebook className='topIcon'/>
            <BsInstagram className='topIcon'/>
            <BsTwitter className='topIcon'/>
            <BsPinterest className='topIcon'/>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className='topListItem'>
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li className='topListItem'>
                <Link to='' className='link'>Write</Link>
                </li>
                <li className='topListItem'>
                    <Link to='' className='link'>Contact</Link>
                </li>
                <li className='topListItem'>
                    <Link to='/write' className='link'></Link>
                </li>
                <li className='topListItem'>
                    {user && "Logout"}
                </li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
                    <img className='topImg' src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="topImg" />
                ):(
                    <ul className='topList'>
                        <li className='topListItem'>
                            <Link to='/login' className='link'>Login</Link>
                        </li>
                        <li className='topListItem'>
                            <Link to='/register' className='link'>Register</Link>
                        </li>
                        
                    </ul>
                )
            }
            
            <BsSearch className='topSearchIcon'/>
        </div>
    </nav>
  )
}

