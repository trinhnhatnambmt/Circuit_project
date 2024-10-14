import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk(
    "user/fetchUserData",
    async (accessToken) => {
        const response = await axios.get(
            "http://167.71.220.5:8080/account/profile",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response.data;
    }
);

const initialState = {
    account: {
        access_token: "",
        refresh_token: "",
        userInfo: {},
    },
    isAuthenticated: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        FETCH_USER_LOGIN_SUCCESS: (state, action) => {
            state.account.access_token = action?.payload?.accessToken;
            state.account.refresh_token = action?.payload?.refreshToken;
            state.isAuthenticated = true;
        },

        USER_LOGOUT_SUCCESS: (state) => {
            state.account = {
                access_token: "",
                refresh_token: "",
            };

            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.loading = true; // Đang gọi API
                state.error = null; // Xóa lỗi
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.loading = false; // Gọi API thành công
                state.account.userInfo = action.payload; // Lưu thông tin người dùng
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.loading = false; // Gọi API thất bại
                state.error = action.error.message; // Lưu thông báo lỗi
            });
    },
});

export const { FETCH_USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } =
    userSlice.actions;
export default userSlice.reducer;
