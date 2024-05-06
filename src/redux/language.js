import { createSlice } from "@reduxjs/toolkit";
import { EN } from '../util/PAGE_SCRIPT'

export const languageSlice = createSlice({
    name: "language",
    initialState: {
        script: EN,
        lang: 'en'
    },
    reducers: {
        setLanguage: (state, action) => {
            state.lang = state.script.language

            localStorage.removeItem("language");
            localStorage.setItem(
                "language",
                action.payload
            );
        },
        setScript: (state, action) => {
            state.script = action.payload;
            state.lang = state.script.language
        }
    }
});

export const selectScript = (state) => state.language.script;
export const selectLanguage = (state) => state.language.lang;
export const { setLanguage, setScript } = languageSlice.actions;
export default languageSlice.reducer;
