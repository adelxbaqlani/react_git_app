import React,{useEffect , useRef}  from "react";
import Modal from "../components/Modal/Modal";
import { useNavigate,Link } from "react-router-dom";
import ReactDOM from "react-dom";
import './../styles/pages/reserve_modal.scss';
import { connect } from "react-redux";
import { GoX } from "react-icons/go";
import testCustomHook from "../components/utils/OnScrollCustomHook";

import {  reset_services,reset_artists , reset_dates , reset_hours , resetReserveInfo   } from "../actions";

const ReserveationModal = (props)=>{

   const ref = useRef();
   const navigate = useNavigate();
   
   testCustomHook(ref);
  const onModalDismiss = ()=>{   
         console.log(props);
         // props.resetReserveInfo();
         navigate('/');

     }

   const renderActions =()=>{
      return(
         <div ref={ref}  className="dismissBtn">
            
            <Link to ={'/'}><GoX/></Link>
         </div>
         
      )
   }




   return(
     <Modal
        onDismiss = {onModalDismiss}
        title = {'موضوع'}
        discription = {'میتوانید نوبت های رزرو شده ی خود را در صفحه نوبت دهی چک کنید'}
        renderActions = {renderActions()}
     />     
   )
 



}

// const mapStateToProps = (state , ownProps)=>{
 
// }
export default connect(null ,  { reset_artists , reset_dates , reset_hours ,resetReserveInfo }) (ReserveationModal);