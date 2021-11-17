import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

import index from "../sagas";

import rootReducer from "../reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();
export const configureStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(index);
export const persist = persistStore(configureStore);

export default { configureStore, persist };
