import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    account: {
        // email: "",
        access_token: "",
        refresh_token: "",
        // name: "",
        // avatar: "",
        // role: "",
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

        // isAuthenticated: true,

        USER_LOGOUT_SUCCESS: (state, action) => {
            state.account = {
                access_token: "",
                refresh_token: "",
            };

            state.isAuthenticated = false;
        },
    },
});

export const { FETCH_USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } =
    userSlice.actions;
export default userSlice.reducer;
