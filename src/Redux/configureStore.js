import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./Reducer/index";

export default function configureStore() {
    return createStore(reducers, applyMiddleware(thunk));
}
