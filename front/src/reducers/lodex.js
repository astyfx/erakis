import {
  RECEIVE_LODEX,
} from '../actions/types'

const initialState = {
  items: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_LODEX:
      return {
        ...state,
        items: action.payload.results,
      }
    default:
      return state
  }
}
