import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosinstance";

// Thunks untuk melakukan aksi async
export const fetchAllGolongan = createAsyncThunk(
  "golongan/fetchAll",
  async () => {
    const response = await axiosInstance.get(`/golongan`);
    return response.data;
  }
);

export const addGolongan = createAsyncThunk("golongan/add", async (golonganData) => {
  const response = await axiosInstance.post(`/golongan`, golonganData);
  return response.data;
});

export const updateGolongan = createAsyncThunk(
  "golongan/update",
  async (golonganData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put("/golongan", golonganData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteGolongan = createAsyncThunk("golongan/delete", async (id) => {
  await axiosInstance.delete(`/golongan/${id}`);
  return id;
});

// Slice untuk Golongan
const golonganSlice = createSlice({
    name: "golongan",
    initialState: {
      list: [],
      status: "idle",
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAllGolongan.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchAllGolongan.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.list = action.payload;
        })
        .addCase(fetchAllGolongan.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        })
        .addCase(addGolongan.fulfilled, (state, action) => {
          state.status = "succeeded";
          if (Array.isArray(state.list)) {
            state.list.push(action.payload);
          } else {
            state.list = [action.payload];
          }
        })
        .addCase(updateGolongan.fulfilled, (state, action) => {
          if (Array.isArray(state.list)) {
            state.list = state.list.map((golongan) =>
              golongan.id === action.payload.id ? action.payload : golongan
            );
          } else {
            state.list = [action.payload];
          }
        })
        .addCase(deleteGolongan.fulfilled, (state, action) => {
            if (Array.isArray(state.list)) {
              state.list = state.list.filter((golongan) => golongan.id !== action.payload);
            }
          });
    },
  });

export const selectAllGolongan = (state) => state.golongan.list;
export const selectGolonganStatus = (state) => state.golongan.status;
export const selectGolonganError = (state) => state.golongan.error;

export default golonganSlice.reducer;
