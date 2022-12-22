import { divide } from "lodash";
import React from "react";
import './services.scss';



const Services  =()=>{
    return(
        <div className="services__items">
        <div className="services__items__item">
           <div className="services__items__item--img services__items__item--img--1">
           </div>
          <div className="services__items__item--title">         
            ناخن
          </div>
        </div>
        <div className="services__items__item">
          <div className="services__items__item--img services__items__item--img--2"></div>
          <div className="services__items__item--title">ابرو</div>
        </div>
        <div className="services__items__item">
          <div className="services__items__item--img services__items__item--img--3"></div>
          <div className="services__items__item--title">مو</div>
        </div>
        <div className="services__items__item">
          <div className="services__items__item--img  services__items__item--img--4"></div>
          <div className="services__items__item--title">گریم</div>
        </div>
      </div>
    )
}

export default Services;