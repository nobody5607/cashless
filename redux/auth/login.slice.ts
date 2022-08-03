import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { LoginForm, ResultLogin } from "@/models/auth.model";
import axios from "axios";
import { RootState } from "../store";

const initialState: ResultLogin = {
  token: "",
  message: "",
  loading: false,
  status: "",
  data: undefined,
};

//action
export const loginFunc = createAsyncThunk(
  "login/post",
  async (formData: LoginForm, { rejectWithValue }) => {
    try {
      const url = process.env.NEXT_PUBLIC_BASE_URL_API + `/auth/login`;
      const response = await (
        await axios.post<ResultLogin>(url, formData, {})
      ).data;

      if (response) {
        return response;
      } else {
        return rejectWithValue(response);
      }
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

//reducer
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fullfiled, pending, rejected
    builder
      .addCase(loginFunc.pending, (state) => {
        state.loading = true;
        state.message = "";
        state.data = undefined;
      })
      .addCase(loginFunc.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.data = undefined;
      })
      .addCase(loginFunc.rejected, (state, action: any) => {
        state.loading = false;
        state.message = action.payload.message;
        state.data = action.payload.data;
      });
  },
});

export const registerSelector = (store: RootState): ResultLogin => store.login;
export default registerSlice.reducer;
