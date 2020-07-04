import React from "react";
import { createPortal } from "react-dom";

function App() {
  const bodyRef = React.useRef(null);
  const [num, setNum] = React.useState(0);
  //   React.useEffect(() => {
  //     return () => {
  //       window.document.body.removeChild(bodyRef.current);
  //     };
  //   });
  if (bodyRef.current === null) {
    // const oDiv = window.document.createElement("div");
    // window.document.body.appendChild(oDiv);
    // oDiv.classList.add("w");
    // oDiv.classList.add("ws");

    bodyRef.current = window.document.body;
  }
  return createPortal(
    <div id="123">
      <div
        onClick={() => {
          setNum((num) => ++num);
        }}
      >
        modal---{num}
      </div>
    </div>,
    bodyRef.current
  );
}

export default function () {
  const [show, setShow] = React.useState(0);
  console.log(123);

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        click
      </button>
      {show ? <App></App> : null}
    </div>
  );
}
