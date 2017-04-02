import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import configuration from './configuration'
import auth from './auth'
import lodex from './lodex'

const rootReducer = combineReducers({
  configuration,
  auth,
  lodex,
  routing: routerReducer,
})

export default rootReducer
