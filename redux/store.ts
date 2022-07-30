import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import queueSlice from "./queue.slice";

const reducer = {
  queue: queueSlice,
};

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === "development",
});

// export type of root state from reducers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
