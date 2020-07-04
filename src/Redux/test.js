import React from "react";
import { store } from "./store";
export default class App extends React.Component {
  componentDidMount = () => {
    store.subscribe(() => {
      this.forceUpdate();
    });
    // console.log(store.dispatch({ type: "add", payload: 12 }));
  };
  render() {
    return (
      <div>
        <p>{store.getState().home1}</p>
        <p>{store.getState().home2}</p>

        <button
          onClick={() => {
            store.dispatch({ type: "add", payload: 12 });
          }}
        >
          add
        </button>
        <button
          onClick={() => {
            store.dispatch({ type: "minus1", payload: 12 });
          }}
        >
          minus
        </button>
        <button
          onClick={() => {
            store.dispatch((dispatch) => {
              dispatch(
                new Promise((a) => {
                  setTimeout(() => {
                    a({ type: "add", payload: 10 });
                  }, 1000);
                })
              );
            });
          }}
        >
          promiseAdd
        </button>
        <button
          onClick={() => {
            store.dispatch((dispatch, getState) => {
              setTimeout(() => {
                dispatch({ type: "minus" });
              }, 1000);
            });
          }}
        >
          asyncminus
        </button>
      </div>
    );
  }
}
