import {
  SET_AUTHENTICATED,
  RECEIVE_AUTH_USER,
} from '../actions/types'

const initialState = {
  authenticated: false,
  user: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: action.payload,
      }
    case RECEIVE_AUTH_USER:
      return Object.assign({}, state, {
        authenticated: true,
        user: action.payload.user,
      })
    default:
      return state
  }
}
