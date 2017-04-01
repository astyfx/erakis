import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import reduxThunk from 'redux-thunk'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import reducers from '../reducers' // Or wherever you keep your reducers

const history = createHistory()

const configureStore = (initialState) => {
  return createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(reduxThunk),
      applyMiddleware(routerMiddleware(history)),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  )
}
const store = configureStore()

import Home from './Home'
import Lodex from './Lodex'
import LodChat from './LodChat'

import styled from 'styled-components'

import {
  globalStyles,
  cubicBezier,
  variables,
} from '../styles'

globalStyles()

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Body = styled.div`
  display: flex;
  flex: 1;
`

const Logo = styled.div`
  font-size: 16px;
  margin-right: 16px;
`

const TopBar = styled.div`
  position: relative;
  flex: 0 0 auto;
  flex-direction: row;
  height: 50px;
  padding: 0 15px;
  transition: all .15s ${cubicBezier};
  color: #f5f8fa;
  background-color: #394b59;
  box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.4);
`

const TopBarLeft = styled.div`
  display: flex;
  float: left;
  align-items: center;
  height: 50px;
`

const NavbarLink = styled(Link)`
  display: block;
  cursor: pointer;
  color: #f5f8fa;
  height: 30px;
  line-height: 28px;
  padding: 0 10px;
  vertical-align: middle;
  font-size: 14px;
  border-radius: 3px;
  transition: all .25s ${cubicBezier};
  border: 1px solid transparent;
  text-decoration: none;
  &:hover {
    color: #f5f8fa;
    background: rgba(138, 155, 168, .15);
    text-decoration: none;
  }
`

const NavbarItem = styled.div`
  display: inline-block;
`

const Navbar = styled.div`
  float: right;
  padding: 8px 16px;
  ${NavbarItem} + ${NavbarItem} {
    margin-left: 10px;
  }
`



const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <TopBar>
          <TopBarLeft>
            <Logo>
              ERAKiS
            </Logo>
          </TopBarLeft>
          <Navbar>
            <NavbarItem>
              <NavbarLink
                to="/"
              >
                첫 화면
              </NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink
                to="/lodex"
              >
                LODEX
              </NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink
                to="/lodchat"
              >
                LOD 챗
              </NavbarLink>
            </NavbarItem>
          </Navbar>
        </TopBar>
        <Body>
          <Route exact path="/" component={Home} />
          <Route path="/lodex" component={Lodex} />
          <Route path="/lodchat" component={LodChat} />
        </Body>
      </Layout>
    </ConnectedRouter>
  </Provider>
)

export default Root
