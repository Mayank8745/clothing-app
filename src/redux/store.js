import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

// export default { store, persistor };
