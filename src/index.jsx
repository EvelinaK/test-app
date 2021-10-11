import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import AppToolBar from "./components/AppToolBar/AppToolBar";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <App />
       <AppToolBar />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
