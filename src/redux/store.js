import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice.js";
import sekolahReducer from "./features/sekolahSlice.js";
import siswaReducer from "./features/siswaSlice.js";
import golonganReducer from './features/golonganSlice.js'

const store = configureStore({
  reducer: {
    auth: authReducer,
    sekolah: sekolahReducer,
    siswa: siswaReducer,
    golongan: golonganReducer,
  },
});

export default store;