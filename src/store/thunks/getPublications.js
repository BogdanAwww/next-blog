import { createAsyncThunk } from '@reduxjs/toolkit'
import { instance } from '../../axios/instance'

const getPublications = createAsyncThunk(
  'publications/getPublications',
  async (arg, thunkApi) => {
    try {
      console.log(arg)
      const res = await instance.get('/publications')
      return res.data
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  })

export default getPublications
