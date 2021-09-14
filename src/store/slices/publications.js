import { createSlice } from '@reduxjs/toolkit'
import getPublications from '../thunks/getPublications'

const initialState = {
  list: [],
  status: null,
  error: null
}

const publicationsSlice = createSlice({
  name: 'publications',
  initialState,
  reducers: {

  },
  extraReducers: {
    [getPublications.pending]: (state, action) => {
      state.error = null
      state.status = 'pending'
    },
    [getPublications.fulfilled]: (state, action) => {
      state.publications = action.payload.posts
      state.status = 'fulfilled'
    },
    [getPublications.rejected]: (state, action) => {
      state.error = action.payload
      state.status = 'rejected'
    }
  }
})

export default publicationsSlice.reducer
