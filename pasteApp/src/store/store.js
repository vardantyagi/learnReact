import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from '../reduxSlice/pasteSlice'
export const store = configureStore({
  reducer: {
    pasteReducer,
  },
})