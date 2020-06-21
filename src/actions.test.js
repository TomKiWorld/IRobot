import * as actions from './actions';
import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

export const mockStore = configureMockStore([thunk])

describe('actions - setSearchField', () => {
  const text = 'searchTerm';
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD, 
    payload: text
  }

  it('Should handle CHANGE_SEARCH_FIELD', () => {
    expect(actions.setSearchField(text))
      .toEqual(expectedAction);
  });
});

describe('actions - requestRobots', () => {
  it('Should handle requesting robots API', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    expect(action[0]).toEqual({ type: REQUEST_ROBOTS_PENDING });
  });

  it('Should return response from robots API', () => {
    const store = mockStore();
    return store.dispatch(actions.requestRobots())
      .then( () => {
        const action = store.getActions();
        expect(action[1]['type']).toBe(REQUEST_ROBOTS_SUCCESS)
      });
  });

  it('Should return error from robots API', () => {
    nock('https://jsonplaceholder.typicode.com')
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get('/users')
      .reply(400, 'OK');

    const store = mockStore();
    return store.dispatch(actions.requestRobots())
      .then( () => {
        const action = store.getActions();
        expect(action[1]['type']).toBe(REQUEST_ROBOTS_FAILED)
      });
  });
});
