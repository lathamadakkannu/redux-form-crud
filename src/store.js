import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './SlicePage'


export const store = configureStore({
  reducer: {
     tasks:tasksReducer
  },
})