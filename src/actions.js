import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
  CHANGE_ROUTE,
  SET_NAME
} from './constants';

export const setSearchField = (text) => ({ type: CHANGE_SEARCH_FIELD, payload: text });

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
};

export const setRoute = (text) => ({ type: CHANGE_ROUTE, payload: text });

export const setName = (text) => ({ type: SET_NAME, payload: text });
