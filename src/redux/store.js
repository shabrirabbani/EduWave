import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice.js";
import sekolahReducer from "./features/sekolahSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    sekolah: sekolahReducer
  },
});

export default store;