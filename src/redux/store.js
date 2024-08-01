import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice.js";
import sekolahReducer from "./features/sekolahSlice.js";
import siswaReducer from "./features/siswaSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    sekolah: sekolahReducer,
    siswa: siswaReducer
  },
});

export default store;