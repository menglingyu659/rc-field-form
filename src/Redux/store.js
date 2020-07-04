import { createStore, applyMiddleware, combineReducers } from "./index";
// import { createStore, applyMiddleware, combineReducers } from "redux";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import reduxPromise from "redux-promise";

function reducer1(state = 0, { type, payload = 1 }) {
  switch (type) {
    case "add":
      return state + payload;
    case "minus":
      return state - payload;
    default:
      return state;
  }
}
function reducer2(state = 1, { type, payload = 1 }) {
  switch (type) {
    case "add1":
      return state + payload;
    case "minus1":
      return state - payload;
    default:
      return state;
  }
}

const logger = ({ getState }) => {
  return (next) => (action) => {
    if (typeof action === "function") {
      return next(action);
    }
    console.group(`action ${action.type} @ ${new Date().toLocaleString()}`);
    console.log(`%c prev state `, "color: gray", getState());
    console.log(`%c action    `, "color: aqua", action);
    const returnAction = next(action);
    console.log(`%c next state `, "color: yellowgreen", getState());
    console.groupEnd();
    return returnAction;
  };
};

const thunk = ({ dispatch, getState }) => {
  return (next) => (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    return next(action);
  };
};

const reduxPromise = () => {
  return (next) => (action) => {
    if (action instanceof Promise) {
      return action.then((act) => {
        return next(act);
      });
    }
    return next(action);
  };
};

const store = createStore(
  combineReducers({
    home1: reducer1,
    home2: reducer2,
  }),
  applyMiddleware(reduxPromise, thunk, logger)
);
export { store };
