import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users.reducer';
import authReducer from './auth.reducer';
import ticketsReducer from './tickets.reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    tickets: ticketsReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
