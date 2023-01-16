import React from 'react'
import './singlePost.css';
import { BiEdit, BiTrash } from 'react-icons/bi';

export default function singlePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/10390464/pexels-photo-10390464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="singleImg" className="singlePostImg" />
        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
                <BiEdit className='singlePostIcon'/>
                <BiTrash className='singlePostIcon'/>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>Autor: <b>Darko</b></span>
            <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sed officiis eum 
            quod voluptas minima aspernatur.
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sed officiis eum 
            quod voluptas minima aspernatur.
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sed officiis eum 
            quod voluptas minima aspernatur.
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sed officiis eum 
            quod voluptas minima aspernatur.
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sed officiis eum 
            quod voluptas minima aspernatur.
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sed officiis eum 
            quod voluptas minima aspernatur.
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sed officiis eum 
            quod voluptas minima aspernatur.
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sed officiis eum 
            quod voluptas minima aspernatur.
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sed officiis eum 
            quod voluptas minima aspernatur.
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sed officiis eum 
            quod voluptas minima aspernatur.
        </p>
      </div>
    </div>
  )
}
