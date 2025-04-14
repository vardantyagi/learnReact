import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from '../pasteSlice/pasteSlice'
export const store = configureStore({
  reducer:{
    pasteReducer,
  }
})