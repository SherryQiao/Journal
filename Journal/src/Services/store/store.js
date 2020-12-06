import {applyMiddleware, createStore} from "redux"
import reducers from "./reducers"
import defaultState from "./state"

const store = createStore(reducers,defaultState);
export default store;