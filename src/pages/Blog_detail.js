import { divide } from "lodash";
import { useParams } from 'react-router-dom';
import '../styles/pages/blog_detail.scss';
import React from "react";


const Blog_detail = (props)=>{

    const {id} =  useParams();
    console.log(useParams());
    return (
        <div className="blog-detail">
           
            <div className="blog-detail__header">
                 <div className="blog-detail__header__title">
                    مراقبت های پوستی مخصوص تابستان
                 </div>
                 <div className="blog-detail__header__author">
                      نویسنده : دکتر پژوهنده
                 </div>
                 <div className="blog-detail__header__creation_date">
                    شهریور ماه 1401
                 </div>
                 
            </div>
            <div className="blog-detail__main-body">
                <div className="blog-detail__main-body__img">
                
 
                </div>
                <div className="id">شناسه :   {id}    </div>
                <div className="blog-detail__main-body__post-title">
                     موضوع پست
                </div>
                <div className="blog-detail__main-body__post-description">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </div>
            </div>
          
        </div>
    )
}

export default Blog_detail;