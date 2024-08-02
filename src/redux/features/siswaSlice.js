import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosinstance";

// Thunks untuk melakukan aksi async
export const fetchAllSiswa = createAsyncThunk("siswa/fetchAll", async () => {
  const response = await axiosInstance.get(`/siswa`);
  return response.data.data;
});

export const fetchSiswaById = createAsyncThunk("siswa/fetchById", async (id) => {
  const response = await axiosInstance.get(`/siswa/${id}`);
  return response.data.data;
});

export const addSiswa = createAsyncThunk("siswa/add", async (siswaData) => {
  const response = await axiosInstance.post(`/siswa`, siswaData);
  return response.data.data;
});

export const updateSiswa = createAsyncThunk(
  "siswa/update",
  async (siswaData) => {

    const response = await axiosInstance.put(`/siswa`, siswaData);
    return response.data;
  }
);

export const deleteSiswa = createAsyncThunk("siswa/delete", async (id) => {
  await axiosInstance.delete(`/siswa/${id}`);
  return id;
});

export const updateStatus = createAsyncThunk(
  "siswa/updateStatus",
  async (listSiswaId) => {
    await axiosInstance.post("/siswa/reset", {
      siswaId: listSiswaId,
    });
  }
);

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
      .addCase(fetchSiswaById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(addSiswa.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateSiswa.fulfilled, (state, action) => {
        if (Array.isArray(state.list)) {
          state.list = state.list.map((siswa) => 
            siswa.id === action.payload.id ? action.payload : siswa
          );
        } else {
          state.list = [action.payload];
        }
      })
      .addCase(deleteSiswa.fulfilled, (state, action) => {
        state.list = state.list.filter((siswa) => siswa.id !== action.payload);
      })
      .addCase(updateStatus.fulfilled, (state, action) => {
        // Kamu bisa memperbarui status siswa di sini jika perlu.
        // Misalnya, jika response.data mengandung daftar siswa yang telah diupdate:
        action.payload.forEach((updatedSiswa) => {
          const index = state.list.map(
            (siswa) => siswa.id === updatedSiswa.id
          );
          if (index !== -1) {
            state.list[index] = updatedSiswa;
          }
        });
      });
  },
});

export const selectAllSiswa = (state) => state.siswa.list;
export const selectSiswaStatus = (state) => state.siswa.status;
export const selectSiswaError = (state) => state.siswa.error;

export default siswaSlice.reducer;
