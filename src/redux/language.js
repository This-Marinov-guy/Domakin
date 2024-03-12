import { createSlice } from "@reduxjs/toolkit";
import { BG } from '../util/PAGE_SCRIPT'

export const languageSlice = createSlice({
    name: "language",
    initialState: {
        script: BG,
    },
    reducers: {
        setLanguage: (state, action) => {
            localStorage.removeItem("language");
            localStorage.setItem(
                "language",
                action.payload
            );
        },
        setScript: (state, action) => {
            state.script = action.payload;
        }
    }
});

export const selectScript = (state) => state.language.script;
export const { setLanguage, setScript } = languageSlice.actions;
export default languageSlice.reducer;
