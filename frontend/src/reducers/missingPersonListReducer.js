// const missingPersonListReducer = (state = { missingPersons:[], action } ) => {
//     switch(action.type) {
//         case 'MISSINGPERSON_LIST_REQUEST':
//             return { loading: true, missingPersons: [] }
        
//         case 'MISSINGPERSON_LIST_SUCCESS':
//             return { loading: false, missingPersons: action.payload }

//         case 'MISSINGPERSON_LIST_FAIL':
//                 return { loading: false, error: action.payload }

//         default:
//             return state
//     }
// }

import { MISSINGPERSON_LIST_REQUEST, MISSINGPERSON_LIST_SUCCESS, MISSINGPERSON_LIST_FAIL } from '../constants/missingPersonConstants'

const missingPersonListReducer = (
  state = { missingPersons: [], loading: false, error: null },
  action
) => {
  switch (action.type) {
    case MISSINGPERSON_LIST_REQUEST:
      return { ...state, loading: true, missingPersons: [] };

    case MISSINGPERSON_LIST_SUCCESS:
      return { ...state, loading: false, missingPersons: action.payload };

    case MISSINGPERSON_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default missingPersonListReducer;
