import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

// Thunks untuk melakukan aksi async
export const fetchAllSiswa = createAsyncThunk(
  "siswa/fetchAll",
  async (username) => {
    const response = await axiosInstance.get(`/sekolah/${username}/siswa`);
    return response.data;
  }
);

export const addSiswa = createAsyncThunk("siswa/add", async (siswaData) => {
  const response = await axiosInstance.post(`/siswa`, siswaData);
  return response.data;
});

export const updateSiswa = createAsyncThunk(
  "siswa/update",
  async ({id, siswaData}) => {
    const response = await axiosInstance.put(`/siswa/${id}`, siswaData);
    return response.data;
  }
);

export const deleteSiswa = createAsyncThunk("siswa/delete", async (id) => {
  await axiosInstance.delete(`/siswa/${id}`);
  return id;
});

// Slice untuk siswa
const siswaSlice = createSlice({
  name: "siswa",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSiswa.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllSiswa.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchAllSiswa.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addSiswa.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateSiswa.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (siswa) => siswa.id === action.payload.id
        );
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      .addCase(deleteSiswa.fulfilled, (state, action) => {
        state.list = state.list.filter((siswa) => siswa.id !== action.payload);
      });
  },
});

export const selectAllSiswa = (state) => state.siswa.list;
export const selectSiswaStatus = (state) => state.siswa.status;
export const selectSiswaError = (state) => state.siswa.error;

export default siswaSlice.reducer;
