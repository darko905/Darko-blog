import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'
import { BsPersonCircle } from 'react-icons/bs';


export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsTitleUpdate">Update Your Account</span>
                <span className="settingsTitleDelete">Delete Account</span>
            </div>
            <form className='settingsForm'>
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://images.pexels.com/photos/3124330/pexels-photo-3124330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagepp" />
                    <label htmlFor="fileInput">
                        <BsPersonCircle className='settingsPPIcon'/>
                    </label>
                    <input type="file" id='fileInput' style={{ display: "none" }} className="settingsPPInput"/>
                </div>
                <label>Username</label>
                <input type="text" placeholder='Ana' name="name" />
                <label>Email</label>
                <input type="email" placeholder="ana@gmail.com" name="email" />
                <label>Password</label>
                <input type="password" placeholder="Password" name="password" />
                <button className="settingsSubmitButton" type="submit">
                    Update
                </button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
