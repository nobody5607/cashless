import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RegisterForm, RegisterResult } from "@/models/auth.model";
import axios from "axios";
import { RootState } from "../store";

const initialState: RegisterResult = {
  message: "",
  loading: false,
  status: "",
  data: undefined,
};
//action
export const registerFunc = createAsyncThunk(
  "register/post",
  async (formData: RegisterForm, { rejectWithValue }) => {
    try {
      const url = process.env.NEXT_PUBLIC_BASE_URL_API + `/auth/register`;
      const response = await (
        await axios.post<RegisterResult>(url, formData, {})
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
      .addCase(registerFunc.pending, (state) => {
        state.loading = true;
        state.message = "";
        state.data = undefined;
      })
      .addCase(registerFunc.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.data = undefined;
      })
      .addCase(registerFunc.rejected, (state, action: any) => {
        state.loading = false;
        state.message = action.payload.message;
        state.data = action.payload.data;
      });
  },
});

export const registerSelector = (store: RootState): RegisterResult =>
  store.register;
export default registerSlice.reducer;
