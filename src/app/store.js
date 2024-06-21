import { configureStore } from '@reduxjs/toolkit'

import cakeReducer from './../features/cake/cakeSlice'
import icecreamReducer from './../features/icecream/icecreamSlice'
import userReducer from './../features/user/userSlise'



const store = configureStore({
  reducer: {
    cake: cakeReducer,
    acecream: icecreamReducer,
    user: userReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store