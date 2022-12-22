import React from "react";
import '../styles/pages/blog.scss';
import Blog_post from '../components/utils/Blog-post/Blog_post.js'; 
import { Link } from "react-router-dom";
const Blog = () => {
  return (
  <div className="blog-container">
    
   <div className="blog-container__header">
    <div className="blog-container__header__title">
    زی بلاگ
    </div>
    <div className="blog-container__header__desc">
      مطالب و اخبار
    </div>
   </div>
   <div className="blog-container__posts">
     
      <Blog_post 
        id = {1} 
        title ={"اعتماد ب نفس شرط اول احساس زیبایی"}
        created_at_text = {"پنجشنیه هفت مهر 401"} 
        />
   
     
      <Blog_post 
        id = {2} 
        title ={"اعتماد ب نفس شرط اول احساس زیبایی"}
        created_at_text = {"پنجشنیه هفت مهر 401"} 
        />
    
     
      <Blog_post 
        id = {3} 
        title ={"اعتماد ب نفس شرط اول احساس زیبایی"}
        created_at_text = {"پنجشنیه هفت مهر 401"} 
        />
   
     
      <Blog_post 
        id = {4} 
        title ={"اعتماد ب نفس شرط اول احساس زیبایی"}
        created_at_text = {"پنجشنیه هفت مهر 401"} 
        />
    
     
   </div>
 
  </div>
  );
};

export default Blog;
