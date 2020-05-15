import { fetchData } from '../Services/fetch.js/fetch';

export const SET_URL = 'SET_URL';
export const setURL = () => dispatch => {
  return fetchData()
    .then(url => {
      dispatch({
        type: SET_URL,
        payload: url
      });
    });
};

export const SET_METHOD = 'SET_METHOD';
export const setMethod = () => dispatch => {
  return fetchData()
    .then(method => {
      dispatch({
        type: SET_METHOD,
        payload: method
      });
    });
};

export const SET_BODY = 'SET_BODY';
export const setBody = () => dispatch => {
  return fetchData()
    .then(body => {
      dispatch({
        type: SET_BODY,
        payload: body
      });
    });
};

export const SET_REQUESTS = 'SET_REQUESTS';
export const setRequests = () => dispatch => {
  return fetchData()
    .then(requests => {
      dispatch({
        type: SET_REQUESTS,
        payload: requests
      });
    });
};

export const SET_DISABLE = 'SET_DISABLE';
export const setDisable = () => dispatch => {
  return fetchData()
    .then(disable => {
      dispatch({
        type: SET_DISABLE,
        payload: disable
      });
    });
};

export const SET_DatafetchData = 'SET_DatafetchData';
export const setDatafetchData = () => dispatch => {
  return fetchData()
    .then(DatafetchData => {
      dispatch({
        type: SET_DatafetchData,
        payload: DatafetchData
      });
    });
};
