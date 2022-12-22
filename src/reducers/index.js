import { combineReducers } from "redux";

import counterReducer from "./counterReducer";
import artistReducer from "./artistReducer";
import dateReducer from "./dateReducer";
import hourReducer from "./hourReducer";
import selectedServiceReducer from "./selectedServiceReducer";
import reservationStatusreducer from "./reservationStatusReducer";
import loaderReducer from './LoaderReducer';


export default  combineReducers({
  selection_level: counterReducer,
  artists: artistReducer,
  dates: dateReducer,
  hours: hourReducer,
  reservationInfo: selectedServiceReducer,
  loader:loaderReducer ,
  reservationStatus : reservationStatusreducer
});
 

 