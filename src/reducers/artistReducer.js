import { DISPATCH_ARTISTS, DISPATCH_ARTIST_DATE, RESET } from "../actions/types";
import _ from "lodash";
const INITIAL_STATE = {};
const artistReducer = (state = INITIAL_STATE, action) => {
  // console.log(action.type);
  switch (action.type) {
    case DISPATCH_ARTISTS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case RESET :      
      return {}
    default:
      return { ...state };
  }
};

export default artistReducer;
