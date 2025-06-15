import { configureStore } from "@reduxjs/toolkit"
import pasteReducer from '../features/paste/pasteSlice.js'

export const store = configureStore({
    reducer: {
        paste: pasteReducer
    }
})