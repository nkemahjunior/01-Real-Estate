import { configureStore } from '@reduxjs/toolkit'

import modalReducer from "../ui/modalSlice"

export const store = configureStore({
  reducer: {
    modal : modalReducer
  },
})