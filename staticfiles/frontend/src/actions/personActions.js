import axios from "axios";
import {
  PERSON_LIST_REQUEST,
  PERSON_LIST_SUCCESS,
  PERSON_LIST_FAIL,
  PERSON_DETAILS_REQUEST,
  PERSON_DETAILS_SUCCESS,
  PERSON_DETAILS_FAIL,
  PERSON_DELETE_REQUEST,
  PERSON_DELETE_SUCCESS,
  PERSON_DELETE_FAIL,
  PERSON_CREATE_REQUEST,
  PERSON_CREATE_SUCCESS,
  PERSON_CREATE_FAIL,
  PERSON_UPDATE_REQUEST,
  PERSON_UPDATE_SUCCESS,
  PERSON_UPDATE_FAIL,
  PERSON_UPDATE_RESET,
} from "../constants/personConstants";

export const listPersons =
  (keyword = "", pageNumber = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: PERSON_LIST_REQUEST });

      const { data } = await axios.get(
        `/api/missingPersons/?keyword=${keyword}&page=${pageNumber}`
      );

      dispatch({
        type: PERSON_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PERSON_LIST_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };


export const listPersonDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PERSON_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/missingPersons/${id}`);

    dispatch({
      type: PERSON_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PERSON_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deletePerson = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PERSON_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `/api/missingPersons/delete/${id}/`,
      config
    );

    dispatch({
      type: PERSON_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: PERSON_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createPerson = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PERSON_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `/api/missingPersons/create/`,
      {},
      config
    );

    dispatch({
      type: PERSON_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PERSON_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updatePerson = (person) => async (dispatch, getState) => {
  try {
    dispatch({ type: PERSON_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/missingPersons/update/${person._id}/`,
      person,
      config
    );

    dispatch({
      type: PERSON_UPDATE_SUCCESS,
      payload: data,
    });

    dispatch({ 
      type: PERSON_DETAILS_SUCCESS, 
      payload: data });
      
  } catch (error) {
    dispatch({
      type: PERSON_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
