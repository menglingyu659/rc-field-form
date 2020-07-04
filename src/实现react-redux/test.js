import React, { Component } from "react";
import { createStore, combineReducers } from "../Redux/";
import { useSelector, useDispatch } from "./index";

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
    case "add":
      return state + payload;
    case "minus1":
      return state - payload;
    default:
      return state;
  }
}

export const store = createStore(
  combineReducers({
    home1: reducer1,
    home2: reducer2,
  })
);
let a = null;
function Test(props) {
  //   let store, dispatch;
  //   store = useSelector((state) => state);
  //   dispatch = useDispatch();
  console.log(a === props.children());
  console.log("props", props.children);
  a = props.children();
  return (
    <div>
      {/* {React.createElement(props.children)} */}
      {props.children()}
      <p>{store.home1}</p>
      <p>{store.home2}</p>
      <button onClick={() => {}}>add</button>
    </div>
  );
}
function Test1(props) {
  const store = useSelector((state) => state);
  //   console.log("props", "dispatch");
  return (
    <div>
      <p>{store.home1}</p>
      <p>{store.home2}</p>
      <button
        onClick={() => {
          //   dispatch({ type: "add" });
        }}
      >
        add
      </button>
    </div>
  );
}

// class Test3 extends Component {
//   componentDidMount = () => {
//     console.log("componentDidMount");
//   };
//   componentWillUnmount = () => {
//     console.log("componentWillUnmount");
//   };
//   render() {
//     return <div>"Test3"</div>;
//   }
// }

class Test3 extends Component {
  componentDidMount = () => {
    console.log("componentDidMount");
  };
  componentWillUnmount = () => {
    console.log("componentWillUnmount");
  };
  render() {
    return (
      <div>
        <span>Test3</span>
      </div>
    );
  }
}

export default class Index extends Component {
  state = { num: 1 };
  render() {
    return (
      <div>
        <Test a="s">{() => <Test3></Test3>}</Test>
        <Test1></Test1>
        <button
          onClick={() => {
            this.setState({
              num: this.state.num + 1,
            });
          }}
        >
          bu
        </button>
        {this.state.num}
      </div>
    );
  }
}

// export default connect(
//   (state) => ({ count: state }),
//   (dis) => {
//     return {
//       dis,
//       add() {
//         dis({ type: "add" });
//       },
//     };
//   }
// )(function Test(props) {
//   console.log("props", props);
//   return (
//     <div>
//       <p>{props.count.home1}</p>
//       <p>{props.count.home2}</p>
//       <button
//         onClick={() => {
//           props.add();
//           props.dis({ type: "minus" });
//           props.dis({ type: "minus" });
//         }}
//       >
//         add
//       </button>
//     </div>
//   );
// });
