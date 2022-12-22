import React from "react";
import './hourPicker.scss';
import { connect } from "react-redux";

import HourPickerItem from "./HourPicerItem/HourPickerItem";
const HourPicker = (props) => {



  const renderHours = () => {
    return props.hours.map((hour, index) => {
      return (

        <HourPickerItem key={index} hour={hour} />

      )
    })
  }

  return (
    <React.Fragment>
      <div className="title">ساعت مورد نظر را انتخاب کنید</div>
      {props.hours.length !== 0 ?
        <div className="hours-container">
          {renderHours()}
        </div>
        :
        null

      }
    </React.Fragment>
  )

}

const mapStateToProps = (state, ownProps) => {
  return {

    hours: Object.values(state.hours.hours)

  }
}

export default connect(mapStateToProps)(HourPicker);