
import {
  SELECTED_ARTIST,
  SELECTED_DATE,
  SELECTED_HOUR,
  SELECTED_SERVICE,
  RESERVATION_COMPLETED,
  RESET,
  RESET_SERVICES,
  RESET_ARTISTS,
  RESET_DATES,
  RESET_HOURS,
  RESET_RESERVE_INFO
} from "../actions/types";


const selectedServiceReducer = (state = {}, action) => {
  switch (action.type) {
    case SELECTED_SERVICE:
      return { ...state, selectedSerive: action.payload };

    case SELECTED_ARTIST:
      return { ...state, selectedArtist: action.payload };

    case SELECTED_DATE:
      return { ...state, selectedDate: action.payload };

    case SELECTED_HOUR: {
      return { ...state, selectedHour: action.payload };
    }


    case RESET : {
      return {};
    }
    
    case RESET_RESERVE_INFO : {
    
      return {
         ...state ,
         selectedSerive:{} ,selectedArtist :{}, selectedDate :{} , selectedHour:{}

        }
    }

    case RESET_SERVICES : {
      return { ...state, selectedSerive: {} }
    }
    case RESET_ARTISTS : {
      return { ...state, selectedArtist: {} }
    }
    case RESET_DATES : {
      return { ...state, selectedDate: {} }
    }
    case RESET_HOURS : {
      return { ...state, selectedHour: {} }
    }
    default:
      return state;
  }
};

export default selectedServiceReducer;
