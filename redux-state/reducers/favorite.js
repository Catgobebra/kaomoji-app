import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites : localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [],
}

export const viewFavoritesReducer = createSlice({
  name: 'viewFavorites',
  initialState,
  reducers: {
    changeFavorites: (state, action) => {
        state.favorites = action.payload
    }
  },

})

export const { changeFavorites } = viewFavoritesReducer.actions

export default viewFavoritesReducer.reducer

