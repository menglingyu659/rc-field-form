import React, { useRef, useState, useImperativeHandle } from "react";
var a = null;

function UseRef(props, ref) {
  const [num, setNum] = useState(() => {
    console.log("useState");
    return 0;
  });
  const divRef = useRef("s");
  const divR = { current: "s" };
  React.useEffect(() => {
    console.log(divRef.current, "divRef");
    console.log(divR.current, "divR");
    divR.current = "5";
    divRef.current = "5";
    console.log(a === divRef);

    a = divRef;
  });
  // useImperativeHandle(
  //   (ar) => {
  //     console.log(ar, "ar");
  //   },
  //   () => ({
  //     a: "s",
  //   })
  // );
  // useImperativeHandle(ref, () => divRef);
  console.log(divRef.current, "divRef");
  console.log(divR.current, "divR");

  // if (divRef.current === "s") {
  //   console.log("s");
  //   divRef.current = "132";
  // } else {
  //   console.log("132");
  //   divRef.current = "s";
  // }
  // if (divR.current === "s") {
  //   console.log("s divR");
  //   divR.current = "132";
  // } else {
  //   console.log("132 divR");
  //   divR.current = "s";
  // }
  // useImperativeHandle(divRef, () => {
  //   return 132;
  // });
  // useImperativeHandle(divR, () => 132);

  console.log(divRef.current, "divRef");
  // console.log(divRef);
  console.log(divR.current, "divR");
  return (
    <div>
      {console.log("render")}
      {num % 2 === 0 ? (
        <span id="span" ref={divR}>input
          {num}
        </span>
      ) : (
        <p id="p" ref={divR}></p>
      )}
      {num % 2 === 0 ? <input type="button" value="" ref={divRef} /> : <hr value="" ref={divRef} />}
      {/* {divRef.current} --- {divR.current} */}
      <button
        onClick={() => {
          // divR.current = "132";
          // divRef.current = "132";
          setNum(num + 1);
        }}
      >
        click
      </button>
      {num}
    </div>
  );
}
export default React.forwardRef(UseRef);
