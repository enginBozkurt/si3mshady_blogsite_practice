import React from 'react'
import './post.css'

export default function Post() {
    return (
        <div className="post">
           <img 
           className="postImage" alt=""
           src="https://upload.wikimedia.org/wikipedia/en/d/d4/Nightcrawlerfilm.jpg"></img> 

           <div className="postInfo">
               <div className="postCategories">                     
                    <span className="postCat">Code</span>
                    <span className="postCat">Movies</span>
                    <span className="postCat">Sports</span>
               </div>
               <span className="postTitle">
                   lorem ipsum dolor sit amet
               </span>
               <span className="postDate">
                 1 hour ago.
               </span>
           </div>

        </div>
    )
}
