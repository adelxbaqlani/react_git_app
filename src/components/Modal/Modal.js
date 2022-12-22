import React,{useEffect}  from "react";

import ReactDOM from "react-dom";
import './modal.scss';




const Modal = (props)=>{
  
   const {discription,onDismiss,title,renderActions} = props;
    
  
 
      return(
         ReactDOM.createPortal(
            <div className="modal" onClick = {()=>onDismiss()}>
              <div className="modal__main" onClick={(e) => { e.stopPropagation() }}>
                 <div>
                    

                     
                    {renderActions}                                        
                 
                       <div className="modal__header">
     
                           {title}
     
                        </div>
     
                       <div className="modal__message">
                         
                          {discription}
                          
                       </div>
                 </div>
              </div>
            
     
           </div> , document.querySelector("#modal"))
      )
    
 

}


export default Modal;