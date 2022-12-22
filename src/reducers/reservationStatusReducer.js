import React from "react";
import { RESERVATION_COMPLETED , RESERVATION_CANCELLD} from "../actions/types";


const  reservationStatusreducer  = (state,action)=>{
    switch (action.type) {
        case RESERVATION_COMPLETED: {

            return {...state ,reservationCompleted : action.payload }
      
          }

          case RESERVATION_CANCELLD : {
            // return {...state ,reservationCompleted : action.payload }
          }


          default : {
             return { ...state , reservationCompleted: false}
          }
    }
  
}


export default reservationStatusreducer;