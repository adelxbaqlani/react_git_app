import { HIDE_LOADER, SHOW_lOADER } from "../actions/types";
import _ from "lodash";
const INITIAL_STATE = {};
const loaderReducer = (state = INITIAL_STATE, action) => {
  // console.log(action.type);
  switch (action.type) {
    case SHOW_lOADER:
      return { ...state, showLoader : true };
    case HIDE_LOADER : 
    return {...state , showLoader : false  };

    default:
      return { ...state };
  }
};

export default loaderReducer;
