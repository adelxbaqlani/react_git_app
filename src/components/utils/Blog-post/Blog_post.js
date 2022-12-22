import React from "react";
import './blog-post.scss';
import { Link } from "react-router-dom";
const Blog_post = (props)=>{
    const {id,created_at_text,title} = props;
   
  return (
      <Link to={`/blog-detail/${id}`}>
      <div className={`blog-post`}>
      

         <div className="blog-post__img-container">
              <div className={`blog-post__img blog-post__img--${id}`}></div>
        </div>
        <div className="blog-post__date">{created_at_text}</div>
        <div className="blog-post__title">{title}</div>

     
        
      </div>  
    </Link>     
    )
}

export default Blog_post;