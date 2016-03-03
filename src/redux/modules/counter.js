// This file shows examples for writing reducers and action creators using both the redux-actions library
// and just writing them out explicitly. The method using the redux-actions module is commented out.
// comment in the following line if you want to use redux-actions
// import { createAction, handleActions } from 'redux-actions';
import counterState from '../states/counterState';

// Create action types
// these are just constants the must be in all caps and if the action type is
// more than one word separate with an underscore ex: INCREMENT_COUNTER
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// WITH REDUX-ACTIONS MODULE
// create Actions using createAction
// These functions will create standard flux actions
// standard flux actions are simply objects that must contain an action type and a payload
// the first action creator below will when invoked produce an object
// like so: { type: "INCREMENT", payload: 1 }
// export const increment = createAction(INCREMENT, (value = 1) => value);
// export const decrement = createAction(DECREMENT, (value = 1) => value);

// WITHOUT REDUX-ACTIONS MODULE
export function increment(value = 1) {
  return { type: INCREMENT,
           value };
}

export function decrement(value = 1) {
  return { type: DECREMENT,
           value };
}


// export object containing actions
// this will be imported into the root reducer file
export const actions = {
  increment,
  decrement
};

// WITH REDUX-ACTIONS MODULE
// create Reducer, you must pass in the initial state as the second argument
// export default handleActions({
//   [INCREMENT]: (state, { payload }) => state + payload,
//   [DECREMENT]: (state, { payload }) => state - payload
// }, counterState.counter);

// WITHOUT REDUX-ACTIONS MODULE
export default function counterReducer(state = counterState.counter, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.value;
    case DECREMENT:
      return state - action.value;
    default:
      return state;
  }
}
