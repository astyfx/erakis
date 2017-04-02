import axios from 'axios'
import _ from 'lodash'

import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
  REMOVE_ALL_NOTIFICATION,

  SHOW_DIALOG,
  HIDE_DIALOG,

  RECEIVE_AUTH_USER,
  SET_AUTHENTICATED,

  SET_CURRENT_MENU,

  RECEIVE_LODEX,
} from './types'

const apiDomain = location.hostname === 'localhost' ? 'http://localhost:8000' : ''

function logException(ex, context) {
  // window.Raven.captureException(ex, {
  //   extra: context,
  // })
  window.console && console.error && console.error(ex)
}

axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  // Do something with request error
  return Promise.reject(error.response)
})

axios.interceptors.response.use((response) => {
  // Do something with response data
  return response
}, (error) => {
  if (error && error.response) {
    // The request was made, but the server responded with a status code
    // that falls out of the range of 2xx
    // if (error.response.status === 401) {
    //   browserHistory.push('/auth/signout')
    // } else
    if (error.response.status === 500) {
      logException(error, {
        types: 'Internal Server Error',
      })
    }
  } else {
    // if (nodeEnvironment === 'development') {
    //   console.error(error)
    //   return Promise.reject(error.response)
    // } else {
    //   logException(error)
    // }
  }

  return Promise.reject(error.response)
})

// notifications
function notification(status, message) {
  return {
    type: ADD_NOTIFICATION,
    payload: {
      status,
      message,
    },
  }
}

export function addNotification(status, message) {
  return (dispatch) => {
    dispatch(notification(status, message))
  }
}

export function removeNotification(key) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_NOTIFICATION,
      payload: key,
    })
  }
}

export function removeAllNotification() {
  return (dispatch) => {
    dispatch({
      type: REMOVE_ALL_NOTIFICATION,
    })
  }
}

export const setCurrentMenu = (text) => {
  return {
    type: SET_CURRENT_MENU,
    payload: text,
  }
}

export const receiveAuthUser = (auth) => {
  return {
    type: RECEIVE_AUTH_USER,
    payload: auth,
  }
}

export function signup(payload) {
  // api call
  return (dispatch) => {
    return axios.post(`${apiDomain}/api/auth/signup/`, payload).then((response) => {
      localStorage.setItem('erakisToken', response.data.token)
      return response.data
    }).catch((error) => {
      return Promise.reject(error.data)
    })
  }
}

export function signin(payload) {
  // api call
  return (dispatch) => {
    return axios.post(`${apiDomain}/api/auth/signin/`, payload).then((response) => {
      localStorage.setItem('erakisToken', response.data.token)
      return response.data
    }).catch((error) => {
      return Promise.reject(error.data)
    })
  }
}

export const verifyAuth = (next) => {
  return (dispatch) => {
    return axios.get(`${apiDomain}/api/auth/verify`, {
      headers: {
        Authorization: `JWT ${localStorage.getItem('erakisToken')}`,
      },
    }).then((response) => {
      dispatch(receiveAuthUser(response.data))
    }).catch((error) => {
      if (error.status === 401) {
        localStorage.removeItem('erakisToken')
      }
    })
  }
}

// Dialog
export function showDialog(payload) {
  return (dispatch) => {
    dispatch({
      type: SHOW_DIALOG,
      payload,
    })
  }
}

export function hideDialog() {
  return (dispatch) => {
    dispatch({
      type: HIDE_DIALOG,
    })
  }
}

// lodex
export const receiveLodex = (lodex) => {
  return {
    type: RECEIVE_LODEX,
    payload: lodex,
  }
}

export const fetchLodex = (offset = 0, limit = 20) => {
  return (dispatch) => {
    const params = `?offset=${offset}&limit=${limit}`
    return axios.get(`${apiDomain}/api/lodex/${params}`).then((response) => {
      dispatch(receiveLodex(response.data))
      return response.data
    }).catch((error) => {

    })
  }
}
