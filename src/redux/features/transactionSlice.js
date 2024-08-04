import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosinstance";

const fetchAllSekolahList = createAsyncThunk(
    "transaction/fetchAllSekolah",
    async () => {
        const response = await axiosInstance.get("/sekolah/list-sekolah");
        return response.data.data;
    }
)

const fetchSiswaForTrx = createAsyncThunk(
    'transaction/fetchSiswaForTrx',
    async (nis) => {
        const response = await axiosInstance.get(`/siswa/bayar/${nis}`);
        return response.data.data;
    }
)

const createTransaction = createAsyncThunk(
    'transaction/createTransaction',
    async (transactionData) => {
        const response = await axiosInstance.post(`/transaksi`, transactionData);
        console.log("ini yang dikirim : ",response.data)
        return response.data.data;
    }
)

const transactionSlice = createSlice({
    name: "transaction",
    initialState: {
        list: [],
        siswa: {},
        transaction: [],
        transactionError: null,
        payment: {},
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchAllSekolahList.pending, (state) => {
            state.status = "loading";
          })
          .addCase(fetchAllSekolahList.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.list = action.payload;
          })
          .addCase(fetchAllSekolahList.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
          })
          .addCase(fetchSiswaForTrx.pending, (state) => {
            state.status = "loading";
          })
          .addCase(fetchSiswaForTrx.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.siswa = action.payload;
          })
          .addCase(fetchSiswaForTrx.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
          })
          .addCase(createTransaction.pending, (state) => {
            state.transactionStatus = "loading";
          })
          .addCase(createTransaction.fulfilled, (state, action) => {
            state.transactionStatus = "succeeded";
            state.payment = action.payload
            // Optionally update state with new transaction data if needed
            // For example, you can add the new transaction to a list of transactions
            console.log("Payment State Updated:", state.payment);
            state.transaction.push(action.payload);
          })
          .addCase(createTransaction.rejected, (state, action) => {
            state.transactionStatus = "failed";
            state.transactionError = action.error.message;
             console.error(
               "Error during transaction creation:",
               action.error.message
             );
          });

    }
})

export const selectSekolahList = (state) => state.sekolah.list;

export { fetchAllSekolahList , fetchSiswaForTrx, createTransaction};

export default transactionSlice.reducer;
