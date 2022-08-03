import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { LoginForm, ResultLogin } from "@/models/auth.model";
import axios from "axios";
import { RootState } from "../store";
import { ProfileResult } from "@/models/user.model";

const initialState: ProfileResult = { 
  message: "",
  loading: false,
  status: "",
  data: undefined,
};

//action
export const getProfile = createAsyncThunk(
  "login/post",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const url = process.env.NEXT_PUBLIC_BASE_URL_API + `/account/profile`;
      const response = await (
        await axios.get<ResultLogin>(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
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
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fullfiled, pending, rejected
    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.message = "";
        state.data = undefined;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.data = undefined;
      })
      .addCase(getProfile.rejected, (state, action: any) => {
        state.loading = false;
        state.message = action.payload.message;
        state.data = action.payload.data;
      });
  },
});

export const registerSelector = (store: RootState): ProfileResult =>
  store.account;
export default registerSlice.reducer;
