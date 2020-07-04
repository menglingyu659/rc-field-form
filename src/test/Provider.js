import React from "react";
var a = null;
function Test(props) {
  console.log(a === React.createElement(props.children).type);
  console.log(React.createElement(props.children).type);
  a = React.createElement(props.children).type;
  return <div>Test</div>;
}

function Test1(props) {
  return <div>Test</div>;
}

export default function Index() {
  const [count, set] = React.useState(0);
  return (
    <div>
      <Test>
        {function A() {
          return <div>Index</div>;
        }}
      </Test>
      <Test1></Test1>
      <button
        onClick={() => {
          set(count + 1);
        }}
      >
        set
      </button>
      {count}
    </div>
  );
}
