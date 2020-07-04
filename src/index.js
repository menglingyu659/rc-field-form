import React from "react";
import ReactDOM from "react-dom";
// import App from "./App1";
// import App from "./test";
// import App from "./Dialog";
// import App from "./test/useRef";
// import App from "./test/useMemo";
// import App from "./test/useReducer";
// import App from "./context/index";
// import App from "./test/Provider";

import App from "./onClick/index";

// import { Provider } from "./实现react-redux/index";
// import App, { store } from "./实现react-redux/test";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
