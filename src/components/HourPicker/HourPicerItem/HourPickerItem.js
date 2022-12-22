import React, { useState , useEffect } from "react";
import { connect } from "react-redux";
import { selectedHour } from "../../../actions/index";

import './hourPickerItem.scss';

const HourPickerItem = (props) => {

  const { hour, selectedHour } = props;
  const [selected, setSelected] = useState(false);
  const [hide , setHide] = useState(false);


  useEffect(()=>{
    
    if(!selected && props.hourSelected) {
      
      setHide(true);
    }

  },[props.hourSelected])


  return (
    <div

      className={`hour-item ${selected ? 'selected' : ''} ${hide ? 'hide' : ''}`} key={Math.random()}
      onClick={
        () => {
          setSelected(true)
          selectedHour(hour)
        }
      }
    >
      {hour}
    </div >
  )
}


const mapStateToProps = (state , ownProps)=>{
  
  return {
    hourSelected : state.reservationInfo.selectedHour
  }
}

export default connect(mapStateToProps, { selectedHour })(HourPickerItem);