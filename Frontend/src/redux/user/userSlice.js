import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  status: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.status = true;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.status = false;
    },
  },
});

export const { signInStart, signInFailure, signInSuccess } = userSlice.actions;
export default userSlice.reducer;
