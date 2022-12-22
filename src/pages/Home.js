import React from "react";
import '../styles/pages/home.scss';
import { Link } from "react-router-dom";
import  {connect} from 'react-redux';
import '../components/utils/Blog-post/blog-post.scss';
import Card from "../components/utils/Card/Card";
import Blog_post from "../components/utils/Blog-post/Blog_post";
 
import Services from "../components/Services/Services";

const Home = (props) => {
  console.log(props);
  const {reservationCompleted} = props;
  return(
    <section className="home_container">
      
      <div className="home_container_header">
        <p className="home_container_header__text--primary">ZedLine</p>   
        <p className="home_container_header__text--description"> زندگی زیباست ای زیبا پسند</p>
                     
        <div className="home_container_header__btns">
          <li className={`home_container_header__btn--reserve ${reservationCompleted ? 'has-reserved' : ''}`}>
            <Link to={"/reservation"}>
             رزرو خدمات
             </Link>
          </li>
          <li className="home_container_header__btn--service ">
            <Link to={"/reservation"}>
              خدمات و سرویس ها
             </Link>
          </li>
        </div>         
           
      </div>


    <div className="home_container_info">
       <div className="home_container_info__item">
          <div className="home_container_info__item--heading">      
            تماس
          </div>
          <div className="home_container_info__item--para">
           T:0631444555
          </div>
          <div className="home_container_info__item--para">
           info@ziEmail.com
          </div>

        </div>

      <div className="home_container_info__item">  
          <div className="home_container_info__item--heading">
     
            ساعات کاری
          </div>
          <div className="home_container_info__item--para">
        
           شنبه تا چهارشنیه 9 صبح تا 6 بعداز ظهر

          </div>
         <div className="home_container_info__item--para">
         
           پنجشنیه از ساعت 9 صبح تا 1 بعداز ظهر
          </div>
     

      </div>
 

  </div>



 
  <div className="home_container_services">
      <div className="home_container_services__Title--primary">
          لیست خدمات  
      </div>

      {/*services component*/}
      <Services/>
    

    <div className="home_container_services__description">
   
      نمونه کارای ممتاز گروه رو تو فضای مجازی ببینید

    </div>
  
  </div>
      <div className="home_container_story">
      <div className="home_container_story__img"></div>
      <div className="home_container_story__heading">
          داستان ما
      </div>
    <div className="home_container_story__para">
      ما به عنوان یک گروه ارایش و زیبایی بصورت منسجم کار میکنیم هدف اول و آخر ما رضایت مشتری ازهمه خدمات ماست
     <br></br> <br></br> <br></br>
    </div>
    </div>

    
     
    
  <div className="home_container_shop">
      <div className="home_container_shop__heading">
      فروشگاه
     </div>


     <Card id={1}/>
     <Card id={2}/>
     <Card id={3}/>
     <Card id={4}/>
     

 
 
  </div>




 <div className="home_container_blog">
      <div className="home_container_blog__title">
        زی بلاگ
      </div>

      <Blog_post 
        id = {1} 
        title ={"اعتماد ب نفس شرط اول احساس زیبایی"}
        created_at_text = {"پنجشنیه هفت مهر 401"} 
        />

      <Blog_post 
        id = {2} 
        title ={"مراقبت های دوره ای پوست"}
        created_at_text = {"پنجشنیه چهاردهم مهر 401"}
        />
        
      <Link to='./blog'> 

       <div className="btn btn--transparent--blackText">نمایش همه پست ها</div>

      </Link>
  
 </div>

       
       
   </section>
  )
};

const mapStateToProps = (state , ownProps)=>{
return {
  reservationCompleted : state.reservationStatus.reservationCompleted
}
}

export default connect(mapStateToProps , null)(Home) ;
