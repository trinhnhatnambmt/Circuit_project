import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/features/user/userSlice";
import mentorReducer from "../redux/features/mentor/mentorSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"],
};

const rootReducer = combineReducers({
    user: userReducer,
    mentor: mentorReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
