import React, { useReducer, Component } from "react";

function reducer(state = 0, action) {
  switch (action.type) {
    case "add":
      return state + 1;
    case "minus":
      return state;
    default:
      return state;
  }
}

function init(initVal) {
  //接受的参数为useReducer的第二个参数
  return initVal + 51;
}

const App = function (props) {
  console.log("a");
  return <div>{props.a}</div>;
};

export default function useReducerTest() {
  console.log("se");
  const [state, dispatch] = useReducer(reducer, 5, init); //
  return (
    <div>
      <p>{state}</p>
      <button
        onClick={() => {
          dispatch({ type: "add" });
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          dispatch({ type: "minus" });
        }}
      >
        minus
      </button>
      <App a="a"></App>
    </div>
  );
}
