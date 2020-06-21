import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';

import * as actions from './actions';

describe('reducers - searchRobots', () => {
  const initalStateSearch = {
    searchField: ''
  };
  it('Should return inital state', () => {
    expect(reducers.searchRobots()).toEqual({ searchField: '' });
  });

  it('Should handle CHANGE_SEARCH_FIELD', () => {
    expect(reducers.searchRobots(initalStateSearch, actions.setSearchField('searchTerm') ))
      .toEqual({ searchField: 'searchTerm' });
  });
});

describe('reducers - requestRobots', () => {
  const initalStateRobots = {
    isPending: false,
    robots: [],
    error: ''
  }
  it('Should return inital state', () => {
    expect(reducers.requestRobots()).toEqual(initalStateRobots);
  });

  it('Should handle REQUEST_ROBOTS_PENDING', () => {
    expect(reducers.requestRobots(initalStateRobots, {
      type: REQUEST_ROBOTS_PENDING
    }))
      .toEqual({
        isPending: true,
        robots: [],
        error: ''
      });
  });

  it('Should handle REQUEST_ROBOTS_SUCCESS', () => {
    const mockRobots = [
      {
        id: 1,
        name: 'John Snow',
        email: 'john@gmail.com'
      }
    ]
    expect(reducers.requestRobots(initalStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: mockRobots
    }))
      .toEqual({
        isPending: false,
        robots: mockRobots,
        error: ''
      });
  });

  it('Should handle REQUEST_ROBOTS_FAILED', () => {
    expect(reducers.requestRobots(initalStateRobots, {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'error'
    }))
      .toEqual({
        isPending: false,
        robots: [],
        error: 'error'
      });
  });
});

describe('reducers - setRoute', () => { 
  const initalRoute = {
    route: 'list'
  };

  it('Should return inital route', () => {
    expect(reducers.setRoute()).toEqual(initalRoute);
  });

  it('Should change route', () => {
    expect(reducers.setRoute(initalRoute, actions.setRoute('personal')))
    .toEqual({ route: 'personal' });
  });
});

describe('reducers - setName', () => { 
  const initalName = {
    name: ''
  };

  it('Should return inital name', () => {
    expect(reducers.setName()).toEqual(initalName);
  });

  it('Should change name', () => {
    expect(reducers.setName(initalName, actions.setName('new name')))
    .toEqual({ name: 'new name' });
  });
});
