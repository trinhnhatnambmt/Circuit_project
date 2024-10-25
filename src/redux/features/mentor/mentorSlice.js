import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMentorData = createAsyncThunk(
    "mentor/fetchMentorData",
    async ({ name, minPrice, maxPrice, specializations }) => {
        // Gửi các tham số lọc tới API
        const params = {};

        if (name) params.name = name;
        if (minPrice) params.minPrice = minPrice;
        if (maxPrice) params.maxPrice = maxPrice;
        if (specializations) params.specializations = specializations;

        const response = await axios.get(
            "http://167.71.220.5:8080/account/search-mentor",
            { params } // axios sẽ tự động nối các query parameters vào URL
        );
        return response.data.data; // trả về danh sách mentor
    }
);

const initialState = {
    mentors: [],
    loading: false,
    error: null,
};

export const mentorSlice = createSlice({
    name: "mentor",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMentorData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMentorData.fulfilled, (state, action) => {
                state.loading = false;
                state.mentors = action.payload;
            })
            .addCase(fetchMentorData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default mentorSlice.reducer;
