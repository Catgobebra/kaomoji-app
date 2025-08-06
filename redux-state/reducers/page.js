import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page : 1,
}

export const pageReducer = createSlice({
  name: 'pageReducer',
  initialState,
  reducers: {
    setPage: (state, action) => {
        state.page = action.payload
    }
  }
})

export const { setPage } = pageReducer.actions

export default pageReducer.reducer

