import { DISPATCH_ARTISTS, DISPATCH_ARTIST_DATE ,RESET} from "../actions/types";
import _ from "lodash";

const dateReducer = (state = {}, action) => {


  switch (action.type) {

    case DISPATCH_ARTIST_DATE:

          return { ...state, dates: action.payload.dates };

    case RESET :      

          return {}
          
    default:
      return { ...state };
  }
};

export default dateReducer;
