import { configureStore } from '@reduxjs/toolkit';
import workersReducer from './slice/workersSlice';
import { listenerFavoritesMid } from './favoritesMiddleware';
export const store = configureStore({
  reducer: {
    worker: workersReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerFavoritesMid.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
