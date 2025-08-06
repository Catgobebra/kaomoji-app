import { configureStore } from '@reduxjs/toolkit'
import  viewFavoritesReducer  from './reducers/favorite'
import  sectionReducer  from './reducers/sections'
import  pageReducer  from './reducers/page'

export const store = configureStore({
  reducer: {
    viewFavorites : viewFavoritesReducer,
    sectionReducer : sectionReducer,
    pageReducer : pageReducer
  },
})