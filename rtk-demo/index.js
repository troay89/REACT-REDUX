const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const acecreamActions = require('./features/icecream/icecreamSlice').acecreamActions
const fetchUsers = require('./features/user/userSlise').fetchUsers

console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => {
  // console.log('Update state ', store.getState())
})

store.dispatch(fetchUsers())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))

// store.dispatch(acecreamActions.ordered())
// store.dispatch(acecreamActions.ordered())
// store.dispatch(acecreamActions.restocked(2))

// unsubscribe()