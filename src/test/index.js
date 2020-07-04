import React, { useRef, useState, Component, useImperativeHandle } from "react";
import UseRef from "./useRef";
// function App() {
//   let [num, setNum] = useState(0);
//   const _ref = useRef();
//   return (
//     <div>
//       <button
//         onClick={() => {
//           num++;
//           setNum(num);
//         }}
//       >
//         click
//       </button>
//       <UseRef></UseRef>
//     </div>
//   );
// }
class In extends Component {
  componentDidMount() {
    console.log("In");
  }
  render() {
    return 123;
  }
}
function In1() {
  React.useEffect(() => {
    console.log("In1");
  });
  return <In></In>;
}

class App extends Component {
  constructor(props) {
    super(props);
    console.log(this._ref.current, "cont");
  }
  componentWillMount = () => {
    console.log(this._ref.current, "will");
  };
  componentDidMount = () => {
    console.log(this._ref, "mount");
    console.log(this._ref1.current, "mount_ref1");
  };
  componentDidUpdate = () => {
    console.log(this._ref.current, "date");
  };
  UNSAFE_componentWillUpdate = () => {
    console.log(this._ref.current, "willdate");
  };

  state = {
    name: true,
    a: "www",
  };
  _ref1 = { current: "_ref1" };
  _ref = React.createRef();
  refCb = (elem) => {
    console.log(elem, "eleme");
  };
  render() {
    console.log(this._ref.current, "red");

    return (
      <div className="red">
        {this.state.name}
        <div id="123" ref={this._ref1}></div>
        <div id="1213" ref={this._ref}></div>

        <button
          onClick={() => {
            const { name } = this.state;
            this.setState({
              a: this.state.a + "w",
              name: !name,
            });
          }}
        >
          click
        </button>
        <In1></In1>

        {this.state.name && (
          <span ref={this.refCb} className={this.state.name ? "s" : "w"}>
            s
          </span>
        )}
        <p ref={this.refCb}></p>
        <UseRef ref={this._ref}></UseRef>
        <form
          onSubmit={() => {
            window.event.preventDefault();
            console.log("sub");
          }}
        >
          <button>1</button>
          {this.state.a}
        </form>
      </div>
    );
  }
}
export default App;
