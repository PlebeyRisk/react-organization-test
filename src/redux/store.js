import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from "redux";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";

let reducers = combineReducers({
  app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;