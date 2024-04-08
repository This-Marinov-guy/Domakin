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
            localStorage.removeItem("language");
            localStorage.setItem(
                "language",
                action.payload
            );
        },
        setScript: (state, action) => {
            const lang = `${action.payload}`

            state.script = action.payload;
            state.lang = lang.toLowerCase();
        }
    }
});

export const selectScript = (state) => state.language.script;
export const selectLanguage = (state) => state.language.lang;
export const { setLanguage, setScript } = languageSlice.actions;
export default languageSlice.reducer;
