import { legacy_createStore,  bindActionCreators, combineReducers, applyMiddleware} from 'redux'

// const reduxLogger = require('redux-logger')
// const logger = reduxLogger.createLogger()

//action

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICESCREAM_ORDERED = 'ICESCREAM_ORDERED'
const ICESCREAM_RESTOCKED = 'ICESCREAM_RESTOCKED'

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payLoad: 1,
  }
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payLoad: qty,
  }
}

function orderIceCream(qty = 1) {
  return {
    type: ICESCREAM_ORDERED,
    payLoad: qty,
  }
}

function restockIceCream(qty = 1) {
  return {
    type: ICESCREAM_RESTOCKED,
    payLoad: qty,
  }
}


//  reducer

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// }


const initialCakeState = {
  numOfCakes: 10,
}

const initialIceCreamState = {
  numOfIceCreams: 20,
}

const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type) {
    case CAKE_ORDERED: 
    return {
      ...state,
      numOfCakes: state.numOfCakes - action.payLoad,
    }

    case CAKE_RESTOCKED: 
    return {
      ...state,
      numOfCakes: state.numOfCakes + action.payLoad,
    }

    case CAKE_ORDERED: 
      return {
        ...state,
        numOfCakes: state.numOfIceCreams - 1,
      }
    

    default: return state
  }
}


const IceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type) {

    case ICESCREAM_ORDERED: 
    return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - action.payLoad,
    }

    case ICESCREAM_RESTOCKED: 
    return {
      ...state,
      numOfIceCreams: state.numOfIceCreams + action.payLoad,
    }
    default: return state
  }
}

//store

const rootReducer = combineReducers ({
  cake: cakeReducer,
  iceCream: IceCreamReducer
})

const store = legacy_createStore(rootReducer)
console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(() => {console.log(store.getState())})

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))

const action = bindActionCreators({orderCake, restockCake,
   orderIceCream, restockIceCream}, store.dispatch) 
action.orderCake()
action.orderCake()
action.orderCake()
action.restockCake(3)
action.orderIceCream()
action.orderIceCream()
action.restockIceCream(2)


unsubscribe()
