import { configureStore } from "@reduxjs/toolkit";
import errorReducer from "./error";
import languageReducer from './language'
import loadingReducer from './loading'
import modalReducer from "./modal";
import userReducer from "./user";
import feedbacksReducer from './feedbacks'


export const store = configureStore({
  reducer: {
    error: errorReducer,
    language: languageReducer,
    loading: loadingReducer,
    modal: modalReducer,
    user: userReducer,
    feedbacks: feedbacksReducer,
  },
});
