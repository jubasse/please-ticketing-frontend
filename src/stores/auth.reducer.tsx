import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authSignIn } from "../api/auth/auth-api";

export const signIn = createAsyncThunk(
    'auth/signIn',
    async ({ email, password }: { email: string; password: string }) => {
      return await authSignIn(email, password);
    },
  );

  const authSlice = createSlice({
    name: 'ticket',
    initialState: {
        isLoading: false,
        error: ''
    },
    reducers: {}
});

export default authSlice.reducer;