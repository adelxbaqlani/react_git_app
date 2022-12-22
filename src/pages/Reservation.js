import React, { useEffect, useState , useRef } from "react";
import ServicePicker from "../components/ServciePicker/ServicePicker";
import ArtistPicker from "./../components/ArtistPicker/ArtistPicker";
import DatePicker from "../components/datePicker/DatePicker";
import HourPicker from "../components/HourPicker/HourPicker";
import Button from "../components/utils/Button/Button";
import Loader from '../components/utils/Loader/Loader';
import "../styles/pages/reservation.scss";
import ReserveDetail from "../components/reserveDetail/ReserveDetail";
import _ from "lodash";
import { useNavigate ,useLocation} from "react-router-dom";
import { connect } from "react-redux";
import OnScrollCustomHook from "../components/utils/OnScrollCustomHook";

import { reset , reset_services,reset_artists , reset_dates , reset_hours  , increase , decrease , reservationComplete} from "../actions";
  


// reservation page
const Reservation = (props) => {


  const ref = useRef();
  const location = useLocation();
  
   
  // using useNavigate to handle redirects
  const navigate = useNavigate();

  // deconstructing the props
  const { selectedService, selectedArtist, selectedDate, selectedHour, hours ,showLoader , selection_level , reservationCompleted } = props;
   
  const [showReservationSummary, setShowReservationSummary] = useState(false);
 
  // console.log(props);


  const onReserveConfirm = (e) => {
    
    scrollToTop();
    setTimeout(()=>{
      //automatic redirect and show the modal
      props.reservationComplete()
      navigate('/reserve-modal');
    },450)
   
   
  };

  const scrollToTop =()=>{
    window.scroll({
      behavior: "smooth",
      top: 0,      
    });


  }

  const  onReserveCancel =()=>{
    props.reset();     
  }



  const onReserveStepBack = () => {

    console.log("Canceling reservation");
    if(selection_level == 1 ) {
      props.reset();  
      // props.decrease(); 
    }
    if(selection_level ==  2 ) {
     
      props.reset_artists();
      props.decrease();
    }
    if(selection_level == 3) {
   
      props.reset_dates();
      props.decrease();
    }
    if(selection_level == 4 ) {
     
      props.reset_hours();
      props.decrease();
    }
      
    
 
  };
 
  OnScrollCustomHook(selection_level , !_.isEmpty(selectedHour));
 

  useEffect(() => {

  
   
    // if(!_.isEmpty(selectedHour)){

    //   window.scroll({
    //     behavior: "smooth",
    //     top: 1300,
    //   });

       
    // }
  
  }, [selectedHour]);
 
    

 
 return (
 
   <React.Fragment>
         
      <section ref={ref} className='section-booking' >
        <div className="section-booking__header">
          <div className="section-booking__header__title">رزرو نوبت</div>
          <div className="section-booking__header__discription">
          در سیستم نوبت دهی کاربران میتوانند با توجه به وقت های آزاد سالن تایم
          خدمات مربوط را انتخاب کرده و ازجزییات آن باخبر شوند.
          </div>
        </div>
        
      
  
    
  
        {/* render servicePicker */}
        <ServicePicker/>
        
  
  
  
        {/* render artist picker  */}
        {
          !_.isEmpty(selectedService) ? 
           <div>
             <ArtistPicker /> 
           </div> 
            : null
        }
  
  
  
        {/* render datePicker  */}
        {
         !_.isEmpty(selectedArtist) ? <DatePicker /> : null
        }
  
  
  
  
        {/* render hourPicker */}
        {
         !_.isEmpty(selectedDate) ? <HourPicker /> :null
        }
  
  
        {/* render Loader */}
        { 
          showLoader ? <Loader show = {true} /> : null                
        }
  
  
  
        {/*render stepBack reserve button  */}
        {
          _.isEmpty(selectedHour) && !_.isEmpty(selectedService)  && <Button handleClick={onReserveStepBack} title={"بازگشت به مرحله قبل"}  color = '#fa3c16'/>
        } 
  
       
  
        {/* RENDER RESERVE SUMMARY */}
        {
  
         !_.isEmpty(selectedHour) && (
            <div className="reservation_info_container">

              <ReserveDetail 
                selectedService = {selectedService}
                selectedArtist = {selectedArtist.selectedArtist}
                selectedDate = {selectedDate}
                selectedHour = {selectedHour}
  
              />
              </div>
        )
        
        }
  
  
  
  
         
         {/*render reserve confirm & reject btns */}
          {
           !_.isEmpty(selectedHour)  ? (
            <div className = "btns-box">
            
              <Button handleClick={onReserveConfirm} title={"رزرو  نهایی"} color = "rgb(44, 245, 168)" /> 
              <Button handleClick={onReserveCancel} title={"لغو رزرو"}  color = '#fa3c16'/> 
  
            </div>  
          ): null
         }
  
   
    </section>


  </React.Fragment>
  
 
 )
};



const mapStateToProps = (state) => {
  
  return {
    selectedService: state.reservationInfo.selectedSerive,
    selectedArtist: state.reservationInfo.selectedArtist,
    selectedHour: state.reservationInfo.selectedHour,
    selectedDate: state.reservationInfo.selectedDate,
    reservationCompleted : state.reservationStatus.reservationCompleted,
    hours: state.hours,
    showLoader : state.loader.showLoader , 
    selection_level :state.selection_level 
  };
};


export default connect(mapStateToProps, 
                   { reset , 
                     reset_services ,
                     reset_artists , 
                     reset_dates ,
                     reset_hours , 
                     decrease , 
                     increase , 
                     reservationComplete
                    
                    })
                  (Reservation);
