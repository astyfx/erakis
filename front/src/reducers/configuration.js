import {
  SET_CURRENT_MENU,
} from '../actions/types'

const initialState = {
  menu: 'Home',
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_MENU:
      return {
        ...state,
        menu: action.payload,
      }
    default:
      return state
  }
}
