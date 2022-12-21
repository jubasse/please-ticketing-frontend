import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { userSignUp } from '../api/users/users-api';


export const signUp = createAsyncThunk(
  'users/signup',
  async ({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }) => {
    return await userSignUp(username, email, password);
  },
);

const userAdapter = createEntityAdapter();

const userSlice = createSlice({
  name: 'user',
  initialState: userAdapter.getInitialState({
    isLoading: false,
    error: '',
  }),
  reducers: {
    userAddOne: userAdapter.addOne,
    userRemoveOne: userAdapter.removeOne,
    userUpdateOne: userAdapter.updateOne,
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        userAdapter.setOne(state, action.payload);
        state.isLoading = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { selectAll } = userAdapter.getSelectors(
  (state: any) => state.members,
);

export default userSlice.reducer;
