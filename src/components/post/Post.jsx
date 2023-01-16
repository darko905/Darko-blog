import React from 'react'
import './post.css';
export default function Post() {
  return (
    <div className='post'>
        <img className='postImg' src="https://images.pexels.com/photos/11276231/pexels-photo-11276231.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="post" />
        <div className="postInfo">
            <div className="postcats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet.</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
        </div>
    </div>
  )
}
