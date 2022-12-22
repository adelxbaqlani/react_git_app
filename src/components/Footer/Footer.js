import React from "react";
import Rights from "./Rights";
import './footer.scss';
 import {FaInstagram ,FaFacebook} from "react-icons/fa" ; 
const Footer = ()=>{
    return(
        <div className="footer">        
        <div className="footer_header--text footer__header">در فضای مجازی زدلاین را دنبال کنید</div>
        <div className="footer__social--icons">
           <div className="icon--insta">
            <FaInstagram/>
           </div>
            
           <div className="icon--facebook">
            <FaFacebook/>
           </div>
           

        </div>


       {/* { <!-- google map embeded   -->} */}

       {/*  
          <iframe
             src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2046.8134548236962!2d48.26996821747623!3d30.37037806454919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sfr!4v1652110391814!5m2!1sen!2sfr"
             width="100%" height="450px" style="border:0;" allowFullScreen="" loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"></iframe>
      */}
        <div className="footer__info">
             <div className="footer__info__item">
                 <div className="footer__info__item--heading">      
                    تماس
                 </div>
                 <div className="footer__info__item--para">
                    T:0631444555
                 </div>
                 <div className="footer__info__item--para">
                     info@ziEmail.com
                </div>

             </div>

        <div className="footer__info__item">  
          <div className="footer__info__item--heading">
     
            ساعات کاری
          </div>
          <div className="footer__info__item--para">
        
           شنبه تا چهارشنیه 9 صبح تا 6 بعداز ظهر

          </div>
         <div className="footer__info__item--para">
         
           پنجشنیه از ساعت 9 صبح تا 1 بعداز ظهر
          </div>
     

      </div>
  </div>
         {/* <p className="rights">تمامی حقوق محفوظ است</p> */}
       <Rights/>
  </div>   
    )
}

export default Footer;