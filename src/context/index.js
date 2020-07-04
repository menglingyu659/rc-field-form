import React, { useState, useCallback, useContext } from "react";

const Context = React.createContext();

function Inner() {
  console.log("inner");
  const context = useContext(Context);
  return (
    <div>
      <Context.Consumer>
        {(state) => (
          <div>
            <p>state --------- {state.count}</p>
            <p>{context.count}++</p>
          </div>
        )}
      </Context.Consumer>
    </div>
  );
}

export default function Index() {
  const [num, setNum] = useState(0);
  const add = useCallback(() => {
    setNum(num + 1);
  }, [num]);
  return (
    <div>
      <Context.Provider value={{ count: num }}>
        <Inner></Inner>
      </Context.Provider>
      <button onClick={add}>add</button>
    </div>
  );
}
