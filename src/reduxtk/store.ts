import { configureStore } from '@reduxjs/toolkit';
import workersReducer from './slice/workersSlice';
export const store = configureStore({
  reducer: {
    worker: workersReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
