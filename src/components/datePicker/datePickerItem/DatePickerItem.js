import React, { useState, useEffect } from "react";
import './datePickerItem.scss';
import { connect } from "react-redux";
import { fetchArtistHours } from "../../../actions";
import _ from "lodash";




const DatePickerItem = (props) => {

  const { date, artistsId, selectedService } = props;
  
  const [selected, setSelected] = useState(false);
  const [hide , setHide] = useState(false);

  useEffect(()=>{

    if(!selected && props.selectedDate) {
     setHide(true);
    }
    if(_.isEmpty(props.selectedDate)) {
      setHide(false);
      setSelected(false);
    }

  },[props.selectedDate])

   
  return (
    <div
      className={`date_item  ${selected ? 'selected' : ''} ${hide ? 'hide' : ''}`}
      onClick={() => {
        setSelected(true);
        //ReservationData({ date: date })
        props.fetchArtistHours(date, artistsId, selectedService)
      }}
    >
      {date}
    </div>
  )
}

const mapStateToProps = (state , ownProps)=>{
  return { 
    selectedDate : state.reservationInfo.selectedDate
  }
}

export default connect(mapStateToProps, { fetchArtistHours })(DatePickerItem);