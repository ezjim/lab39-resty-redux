import { setInput, setResponse, loadRequests, setRequest, resetRequests } from '../actions/actions';
import reducer from './reducer';

describe('formReducer testing', () => {
  it('handles setting input state', () => {
    const state = {
      url: '',
      method: '',
      body: '',
      auth: 'none',
      username: '',
      password: '',
      token: ''
    };
    const target = {
      name: 'url',
      value: 'as'
    };
    const action = setInput({ target });
    const newState = reducer(state, action);
    expect(newState).toEqual({
      url: 'as',
      method: '',
      body: '',
      auth: 'none',
      username: '',
      password: '',
      token: ''
    });
  });

  it('handles setting response state', () => {
    const state = {
      response: {}
    };
    const action = setResponse('api.com', 'GET', null, {});
    const newState = reducer(state, action);
    expect(newState).toEqual({
      response: {}
    });
  });

  it('handles loading requests state', () => {
    const state = {
      requests: []
    };
    const action = loadRequests();
    const newState = reducer(state, action);
    expect(newState).toEqual({
      requests: []
    });
  });

  it('handles setting input values from a saved request state', () => {
    const state = {
      url: '',
      method: '',
      body: '',
      auth: 'none',
      username: '',
      password: '',
      token: ''
    };
    const action = setRequest({
      url: 'api.com',
      method: 'GET',
      body: '{ "json": "object" }',
      auth: 'basic',
      username: 'james',
      password: 'pw',
      token: ''
    });
    const newState = reducer(state, action);
    expect(newState).toEqual({
      url: 'api.com',
      method: 'GET',
      body: '{ "json": "object" }',
      auth: 'basic',
      username: 'james',
      password: 'pw',
      token: ''
    });
  });

  it('handles reseting requests', () => {
    const state = {
      requests: ['req1', 'req2']
    };
    const action = resetRequests();
    const newState = reducer(state, action);
    expect(newState).toEqual({
      requests: []
    });
  });
});
