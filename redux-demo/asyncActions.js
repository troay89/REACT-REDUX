import { legacy_createStore, applyMiddleware} from 'redux'
import { thunk } from 'redux-thunk'
import axios from 'axios';

const initialState = {
  loading: false,
  users: [],
  error: '',
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  }
}

const fetchUsersSucceeded = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  }
}

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUESTED: return {...state, loading: true}
    case FETCH_USERS_SUCCEEDED: return {...state, loading: false, users: action.payload}
    case FETCH_USERS_FAILED: return {loading: false, users: [], error: action.payload}
  }
}

const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchUsersRequest())
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      const users = response.data.map((user) => user.id)
      dispatch(fetchUsersSucceeded(users))
    }).catch((error) => {
      dispatch(fetchUsersFailure(error.message))
    })
  }
}

const store = legacy_createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => {
  if(!store.getState().loading) {
    console.log(store.getState())
  }
})
store.dispatch(fetchUsers())
