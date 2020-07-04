export { applyMiddleware } from "./applyMiddleWare";
export { combineReducers } from "./combineReducers";
function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }
  let currentState = reducer(undefined, { type: "ahkjhaslkhgahglkhsalkhg" });
  const listener = [];
  const dispatch = (action) => {
    console.log(listener, "listener");
    currentState = reducer(currentState, action);
    listener.forEach((cb) => cb());
    return action;
  };
  const getState = () => {
    return currentState;
  };
  const subscribe = (cb) => {
    listener.push(cb);
    return () => {
      const index = listener.indexOf(cb);
      listener.splice(index, 1);
    };
  };
  return { dispatch, getState, subscribe };
}
export { createStore };
