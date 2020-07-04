import React from "react";

function Child(props) {
  console.log(props);

  return <div {...props}>child</div>;
}

export default class extends React.Component {
  render() {
    return (
      <div>
        <Child
          onClick={() => {
            console.log("child");
          }}
        ></Child>
      </div>
    );
  }
}
