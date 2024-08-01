import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosinstance";

export const fetchSekolahData = createAsyncThunk(
  "sekolah/fetchSekolahData",
  async (username) => {
    try {
      const response = await axiosInstance.get(`/sekolah/${username}`);
      return response.data.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);


const sekolahSlice = createSlice({
  name: "sekolah",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSekolahData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSekolahData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchSekolahData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectSekolahData = (state) => state.sekolah.data;
export const selectSekolahStatus = (state) => state.sekolah.status;

export default sekolahSlice.reducer;
