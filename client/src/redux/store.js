import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";

// abhi tak hum ne store bnaa liya ha
export const store = configureStore({
  // list all the reducers
  reducer: {
    auth: authSlice.reducer,
  },
});
