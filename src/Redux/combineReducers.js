export function combineReducers(reducers = {}) {
  return (state = {}, action) => {
    for (const prop in reducers) {
      state[prop] = reducers[prop](state[prop], action);
    }
    return state;
  };
}
