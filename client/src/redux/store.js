import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";

// abhi tak hum ne store bnaa liya ha
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
