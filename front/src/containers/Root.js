import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

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
  width: 260px;
  font-size: 20px;
  padding: 14px;
`

const TopBar = styled.div`
  position: relative;
  background: white;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  height: 50px;
  transition: all .15s ${cubicBezier};
  box-shadow: 0 0 1px rgba(76, 86, 103, .25), 0 2px 18px rgba(31, 37, 50, .32);
`

const NavbarLink = styled(Link)`
  display: block;
  color: ${variables.color.gray9};
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 3px;
  transition: all .25s ${cubicBezier};
  border: 1px solid transparent;
  text-decoration: none;
  &:hover {
    color: ${variables.color.gray9};
    text-decoration: none;
    border: 1px solid ${variables.color.gray6};
    box-shadow: 0 1px 1px rgba(0, 0, 0, .05), 0 1px rgba(255, 255, 255, .75);
  }
`

const NavbarItem = styled.div`
  display: inline-block;
`

const Navbar = styled.div`
  flex: 1;
  text-align: right;
  padding: 8px 16px;
  ${NavbarItem} + ${NavbarItem} {
    margin-left: 10px;
  }
`

const Root = () => (
  <Router>
    <Layout>
      <TopBar>
        <Logo>
          ERAKiS
        </Logo>
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
  </Router>
)

export default Root
