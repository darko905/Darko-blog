import React from 'react';
import './write.css';
import { BsPlus } from 'react-icons/bs';

export default function Write() {
  return (
    <div className='write '>
         <img
            className="writeImg"
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="writeImg"
        />
      <form action="" className='writeForm'>
        <div className="writeFormGroup">
            <label htmlFor="">
                <BsPlus className='writeIcon'/>
            </label>
            <input type="file" className='fileInput' style={{display:"none"}}/>
            <input 
                type="text" 
                name="" 
                id="" 
                className='writeInput'
                placeholder='Title' 
                autoFocus={true}
            />
        </div>
        <div className="writeFormGroup">
            <textarea 
                placeholder='Tell your story....' 
                type="text" 
                className='writeInput writeText'
                autoFocus={true}
                ></textarea>
        </div>
        <button className="writeSubmit" type='submit'>
            Publish
        </button>
      </form>
    </div>
  )
}
