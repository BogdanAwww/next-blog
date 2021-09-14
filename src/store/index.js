import { configureStore } from '@reduxjs/toolkit'
import publicationsReducer from './slices/publications'

export const createStore = (preloadedState) => configureStore({
  reducer: {
    publications: publicationsReducer
  },
  preloadedState
})
