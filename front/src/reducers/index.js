import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import configuration from './configuration'
import auth from './auth'

const rootReducer = combineReducers({
  configuration,
  auth,

  routing: routerReducer,
})

export default rootReducer
