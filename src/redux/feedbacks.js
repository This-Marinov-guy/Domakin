import { createSlice } from "@reduxjs/toolkit";

export const feedbacksSlice = createSlice({
    name: "feedbacks",
    initialState: {
        value: [],
    },
    reducers: {
        setFeedbacks: (state, action) => {
            state.value = action.payload
        },
    }
});

export const selectFeedbacks = (state) => state.feedbacks.value;
export const { setFeedbacks } = feedbacksSlice.actions;
export default feedbacksSlice.reducer;
