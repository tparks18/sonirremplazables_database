import axios from 'axios'
import {
  MISSINGPERSON_LIST_REQUEST,
  MISSINGPERSON_LIST_SUCCESS,
  MISSINGPERSON_LIST_FAIL,
} from "../constants/missingPersonConstants";

const listMissingPersons = () => async (dispatch) => {
    try {
        dispatch({ type: MISSINGPERSON_LIST_REQUEST })

        const { data } = await axios.get("/api/missingPersons/");

        dispatch({
            type: MISSINGPERSON_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
          type: MISSINGPERSON_LIST_FAIL,
          payload:error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
        });
    }
}

export default listMissingPersons;