import axios from "axios";
import {
  INCREASE,
  DECREASE,
  DISPATCH_ARTISTS,
  DISPATCH_ARTIST_DATE,
  DISPATCH_ARTIST_HOUR,
  SELECTED_SERVICE,
  SELECTED_ARTIST,
  SELECTED_DATE,
  SELECTED_HOUR,
  RESERVATION_COMPLETED,
  RESERVATION_CANCELLD,
  RESET,
  RESET_SERVICES , 
  RESET_ARTISTS , 
  RESET_DATES , 
  RESET_HOURS,
  RESET_RESERVE_INFO,
  SHOW_lOADER,
  HIDE_LOADER,

} from "./types";

///ACTION CREATOR
export const increase = () => {
  return {
    type: INCREASE,
    payload: null,
  };
};

export const decrease = () => {
  return {
    type: DECREASE,
    payload: null,
  };
};

//fetch all artists
//dispatcing two actions from this action creator
export const fetchArtists = (service) => {
  
  return async (dispatch) => {
    dispatch({type:SHOW_lOADER});
    const response = await axios.get(`http://127.0.0.1:3001/${service}`);
    // console.log(response);
    dispatch({type:INCREASE});
    dispatch({ type: DISPATCH_ARTISTS, payload: response.data });
    dispatch({type:HIDE_LOADER});
    dispatch(selectedService(service));

  };

};


//fetch dates
export const fetchArtistDates = (id, profession, artistName) => {
  return async (dispatch) => {
    dispatch({type:SHOW_lOADER});
    const response = await axios.get(`http://127.0.0.1:3001/${profession}/${id}`);
    dispatch({type:INCREASE});
    dispatch({ type: DISPATCH_ARTIST_DATE, payload: response.data });
    dispatch({type:HIDE_LOADER});
    dispatch(selectedArtist(artistName, id))
  };
};


export const fetchArtistHours = (Selecteddate, id, service) => {

  return async (dispatch) => {
    dispatch({type:SHOW_lOADER});
    const response = await axios.get(`http://127.0.0.1:3001/${service}/${id}`);
    dispatch({type:INCREASE});
    dispatch({ type: DISPATCH_ARTIST_HOUR, payload: response.data })
    dispatch({type:HIDE_LOADER});
    dispatch(selectedDate(Selecteddate));
  }
}



//selected service 
export const selectedService = (selectedService) => {

  return {
    type: SELECTED_SERVICE,
    payload: selectedService
  }
}


//selected artist 
export const selectedArtist = (selectedArtist, id) => {
  return {
    type: SELECTED_ARTIST,
    payload: { selectedArtist, id }
  }
}

//selected date 
export const selectedDate = (selectedDate) => {

  return {
    type: SELECTED_DATE,
    payload: selectedDate
  }

}

//selected hour 
export const selectedHour = (selectedHour) => {

  
   
  return{
     type: SELECTED_HOUR,
     payload: selectedHour
  }
 
 
}
 

//RESERVATION COMPLETED
export const reservationComplete =()=>{
  return{
    type : RESERVATION_COMPLETED , 
    payload : true
  }
}

//RESERVATION canceled
export const reservationCancel =()=>{
  return{
    type : RESERVATION_CANCELLD ,
    payload : false 

  }
}



export const reset = ()=>{

  console.log("reset");
   return {
     type: RESET,
     payload: null
   }
 
 }

export const reset_services = ()=>{

 console.log("reset_services");
  return {
    type: RESET_SERVICES,
    payload: null
  }

}

export const reset_artists = ()=>{

  console.log("reset_artists");
   return {
     type: RESET_ARTISTS,
     payload: null
   }
 
 }
 
 export const reset_dates = ()=>{

  console.log("reset_dates");
   return {
     type: RESET_DATES,
     payload: null
   }
 
 }
 export const reset_hours = ()=>{

  console.log("reset_hours");
   return {
     type: RESET_HOURS,
     payload: null
   }
 
 }

 export const resetReserveInfo = ()=>{
  console.log("reset reserve info");

  return {
    type : RESET_RESERVE_INFO , 
    payload : null
  }
 }

