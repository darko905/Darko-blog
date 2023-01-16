import React from 'react'
import './sidebar.css';
import { BsFacebook, BsInstagram, BsTwitter, BsPinterest } from 'react-icons/bs';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <h2 className='sidebarTitle'>About me</h2>
        <img src="https://images.pexels.com/photos/15050041/pexels-photo-15050041.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="aboutImg" />
        <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. 
            Repellendus eaque veritatis magni nisi 
            iste cupiditate illum vero quidem, 
            blanditiis veniam!
        </p>
      </div>
      <div className="sidebarItem">
        <h2 className='sidebarTitle'>Categories</h2>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Teach</li>
            <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
      <h2 className='sidebarTitle'>Follow Us</h2>
      <div className="sidebarSocial">
            <BsFacebook className='sidebarIcon'/>
            <BsInstagram className='sidebarIcon'/>
            <BsTwitter className='sidebarIcon'/>
            <BsPinterest className='sidebarIcon'/>
      </div>
      </div>
    </div>
  )
}
