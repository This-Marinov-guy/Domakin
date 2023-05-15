import { createSlice } from "@reduxjs/toolkit";
import { BG } from '../util/PAGE_SCRIPT'

export const languageSlice = createSlice({
    name: "language",
    initialState: {
        language: 'bg',
        script: BG,
    },
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
            localStorage.setItem(
                "language",
                JSON.stringify({
                    language: state.language,
                })
            );
        },
        setScript: (state, action) => {
            state.script = action.payload;
        }
    }
});

export const selectLanguage = (state) => state.language.language;
export const selectScript = (state) => state.language.script;
export const { setLanguage, setScript } = languageSlice.actions;
export default languageSlice.reducer;
