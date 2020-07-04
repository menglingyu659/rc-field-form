import React from "react";

// function App(props) {
//   return <div className="App">app</div>;
// }
class App extends React.Component {
  render() {
    return 123;
  }
}
export default React.forwardRef((props, ref) => {
  console.log(props, ref, "----");
  return <App ref={ref}></App>;
});
