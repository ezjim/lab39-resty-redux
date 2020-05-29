import { SET_INPUT, LOAD_REQUESTS, SET_REQUEST, RESET_REQUESTS, SET_RESPONSE } from '../actions/actions';

const initialState = {
  url: '',
  method: 'GET',
  body: '',
  auth: 'none',
  username: '',
  password: '',
  token: '',
  response: {},
  requests: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_INPUT:
      state[action.payload.name] = action.payload.value;
      return state;
    case SET_RESPONSE:
      if(action.payload.ok) {       
        const newRequest = {
          url: state.url,
          method: state.method,
          body: state.body,
          auth: state.auth,
          username: state.username,
          password: state.password,
          token: state.token
        };  
        const match = state.requests.find(request => JSON.stringify(newRequest) === JSON.stringify(request));
        if(!match) state.requests = [...state.requests, newRequest];
        localStorage.setItem('requests', JSON.stringify(state.requests));
      }
      return { ...state, response: action.payload };
    case LOAD_REQUESTS:
      return { ...state, requests: action.payload };
    case SET_REQUEST:
      return { ...state, ...action.payload };
    case RESET_REQUESTS:
      return { ...state, requests: [] };
    default:
      return state;
  }
}
