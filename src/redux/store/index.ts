import {
  configureStore,
  applyMiddleware,
  Tuple,
  combineSlices,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { productSlice } from "../reducer/product";

const reducer = combineSlices(productSlice);

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
