import React from "react";
import ReserveDetail from "../components/reserveDetail/ReserveDetail";
import Button from '../components/utils/Button/Button';
import './../styles/pages/reservation_history.scss';
import { connect } from "react-redux";

import { reset , reset_services,reset_artists , reset_dates , reset_hours  , increase , decrease , reservationComplete} from "../actions";




const ReservationHistory = (props)=>{



  const onReserveCancel = ()=>{
    props.reset();
  }


  

    const { selectedService, selectedArtist, selectedDate, selectedHour, reservationCompleted } = props;
    return (
      <React.Fragment>
         
        <div className="section-booking__header">
           <div className="section-booking__header__title">مشاهده سوابق رزرو نوبت</div>
            <div className="section-booking__header__discription">
               میتوانید سوابق رزرو خود و وضعیت آنها را اینجا ببینید
            </div>
        </div>
         <div className="reserve_title">
           اطلاعات رزرو سابق  
         </div>

        
        <div className="reservation_info_container">
          <ReserveDetail 
                          selectedService = {selectedService}
                          selectedArtist = {selectedArtist.selectedArtist}
                          selectedDate = {selectedDate}
                          selectedHour = {selectedHour}
                          passed = {reservationCompleted}
                        />
        </div>
         
        <div>
            <Button handleClick={onReserveCancel} title={"لغو رزرو"}  color = '#fa3c16'/>              
        </div>
         
      </React.Fragment>
     
    )
}


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
   (ReservationHistory);