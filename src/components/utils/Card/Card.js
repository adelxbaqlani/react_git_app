import React from 'react';
import './card.scss';



 const Card = (props)=>{
    
    const {id} = props;
    return(
    <div className={`card home_container_shop__card--item-${id}`} >
        <div className="card__rating">ویژه</div>
        <div className="card__img"></div>
        <div className="card__product-name">پاک کننده صورت</div>
        <div className="card__product-price"> 15000 تومان</div>
    </div>
    )

}

export default Card;