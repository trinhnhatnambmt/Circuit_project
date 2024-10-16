import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMentorData = createAsyncThunk(
    "mentor/fetchMentorData",
    async () => {
        const response = await axios.get(
            "http://167.71.220.5:8080/account/search-mentor?minPrice=0&sort=service.price&sort=asc"
        );
        console.log("fetchMentorData: ",response.data.data);
        return response.data.data;
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
