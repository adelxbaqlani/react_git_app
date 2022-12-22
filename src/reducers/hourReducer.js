import { DISPATCH_ARTIST_HOUR , RESET } from '../actions/types'




const hourReducer = (state = {}, action) => {

  switch (action.type) {
    case DISPATCH_ARTIST_HOUR:

      return { ...state, hours: action.payload.hours };
    case RESET : 
      return {}

    default:
      return { ...state };

  }

}

export default hourReducer;