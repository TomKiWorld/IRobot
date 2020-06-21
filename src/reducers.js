import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
  CHANGE_ROUTE,
  SET_NAME
} from './constants';

const initalStateSearch = {
  searchField: ''
};

export const searchRobots = (state=initalStateSearch, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initalStateRobots = {
  isPending: false,
  robots: [],
  error: ''
}

export const requestRobots = (state=initalStateRobots, action={}) => {
  switch(action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true};
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false};
    case   REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false};
    default:
      return state;
  }
}

const initalRoute = {
  route: 'list'
};

export const setRoute = (state=initalRoute, action={}) => {
  switch(action.type) {
    case CHANGE_ROUTE:
      return { ...state, route: action.payload };
    default:
      return state;
  }
};

const initalName = {
  name: ''
};

export const setName = (state=initalName, action={}) => {
  switch(action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};