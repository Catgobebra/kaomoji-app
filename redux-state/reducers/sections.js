import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tab : 0,
    subcategory : ''
}

export const sectionReducer = createSlice({
  name: 'sectionReducer',
  initialState,
  reducers: {
    setTab: (state, action) => {
        state.tab = action.payload
    },
    setSubcategory: (state, action) => {
        state.subcategory = action.payload
    }
  }
})

export const { setTab, setSubcategory} = sectionReducer.actions

export default sectionReducer.reducer

