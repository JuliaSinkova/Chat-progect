import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { configureStore, persist } from "./store/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={configureStore}>
    <React.StrictMode>
      <BrowserRouter>
        <PersistGate persistor={persist}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();
