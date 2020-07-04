export function applyMiddleware(...middleWares) {
  return (createStore) => (reducer) => {
    let store = createStore(reducer);
    let dispatch = store.dispatch;
    store = {
      ...store,
      dispatch: (action) => dispatch(action),
    };
    middleWares = middleWares.map((fn) => fn(store));
    dispatch = compose(...middleWares)(dispatch);
    return {
      ...store,
      dispatch,
    };
  };
}

function compose(...funs) {
  if (funs.length === 0) {
    return (args) => args;
  }
  return funs.reduce((previous, current) => (...arg) => {
    return previous(current(...arg));
  });
}
