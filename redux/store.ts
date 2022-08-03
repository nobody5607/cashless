import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import registerSlice from "@/redux/auth/register.slice";
import loginSlice from "./auth/login.slice";
import accountSlice from "./auth/account.slice";

const reducer = {
  register: registerSlice,
  login: loginSlice,
  account: accountSlice,
};

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === "development",
});

// export type of root state from reducers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
