import { INCREASE, DECREASE , RESET} from '../actions/types';



const counterReducer = (num = 0, action) => {
  switch (action.type) {
    case INCREASE:

      return num + 1;


    case DECREASE:
      return num - 1;

    case RESET : 
      return 0 ;

    default:
      return num;

  }
}

export default counterReducer;