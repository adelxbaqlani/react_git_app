import React from "react";
import { connect } from "react-redux";
import DatePickerItem from "./datePickerItem/DatePickerItem";
import './datePicker.scss';
import { selectedService } from "../../actions";

const DatePicker = (props) => {


  const { dates, selectedArtistId, selectedService } = props;


  const renderDatesItem = () => {


    return dates.map((date, index) => {


      return (

        <DatePickerItem
          date={date}
          artistsId={selectedArtistId}
          selectedService={selectedService}
          key={index} />

      )

    })


  }

  


  return (
    <section className="date-picker">
      <div className="date-picker__title">تاریخ مورد نظر را انتخاب کنید</div>
      
      {
       dates.length !== 0 ?

        <div className="date-picker__item-container" >


          {renderDatesItem()}

        </div>
        :
        null
      }
    </section >



  )

}

const mapStateToProps = (state, ownProps) => {


  return {
    dates: Object.values(state.dates.dates),
    selectedArtistId: state.reservationInfo.selectedArtist.id,
    selectedService: state.reservationInfo.selectedSerive
  }

}

export default connect(mapStateToProps, null)(DatePicker);