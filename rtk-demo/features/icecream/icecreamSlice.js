const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  numOfAcescrean: 10
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
    builder.addCase(cakeActions.ordered, state => {
      state.numOfAcescrean--
    })
  }
})


module.exports = acecreamSlice.reducer
module.exports.acecreamActions = acecreamSlice.actions