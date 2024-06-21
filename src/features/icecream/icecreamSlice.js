import { ordered as cakeOrdered } from '../cake/cakeSlice'
import { createSlice } from'@reduxjs/toolkit'

const initialState = {
  numOfAcescrean: 20
}

const acecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfAcescrean --
    },
    restocked: (state, action) => {
      state.numOfAcescrean += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, state => {
      state.numOfAcescrean--
    })
  }
})


export default  acecreamSlice.reducer
export const { ordered, restocked } = acecreamSlice.actions