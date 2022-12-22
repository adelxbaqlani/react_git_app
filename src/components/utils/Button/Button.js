import React from "react";
import './button.scss';



const Button = (props) => {
  const { title, handleClick , color } = props;
  return (

    <div style= {{backgroundColor:color}}
      onClick={(e) => {
        // console.log("HANDLE CLICK HPPEND")
        if(handleClick) {
          handleClick(e);
        }
       
      }} className="btn">
      <p>{title}</p>
    </div>
    
  )
}
export default Button;