import React, { useContext, useReducer, useEffect } from "react";
const Context = React.createContext();

const bindActionCreators = (creaters = {}, dispatch) => {
  const returnCreaters = {};
  for (const prop in creaters) {
    returnCreaters[prop] = () => dispatch(creaters[prop]());
  }
  return returnCreaters;
};

export const Provider = ({ store, children }) => {
  return <Context.Provider value={store}>{children}</Context.Provider>;
};

export const connect = (mapStateToProps = () => ({}), mapDispatchToProps) => (Component) => (props) => {
  const { getState, dispatch, subscribe } = useContext(Context);
  const [, setUpdate] = useReducer((x) => x + 1, 0);
  const mutation = () => {
    if (mapDispatchToProps === undefined) return { dispatch };
    if (typeof mapDispatchToProps === "function") {
      return mapDispatchToProps(dispatch);
    } else {
      return bindActionCreators(mapDispatchToProps, dispatch);
    }
  };
  useEffect(() => {
    const unsubscribe = subscribe(() => setUpdate());
    return () => unsubscribe();
  }, [subscribe]);
  const combine = { ...mapStateToProps(getState()), ...mutation() };
  return <Component {...props} {...combine}></Component>;
};

export const useSelector = (selector) => {
  const { getState, subscribe } = useContext(Context);
  const [, setUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    const unsubscribe = subscribe(() => setUpdate());
    return () => unsubscribe();
  }, [subscribe]);
  return selector(getState());
};

export const useDispatch = () => {
  const { dispatch } = useContext(Context);
  console.log()
  return dispatch;
};
