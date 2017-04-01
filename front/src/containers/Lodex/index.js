import React from 'react'

import styled from 'styled-components'

import { LayoutFlex } from '../../components/Layout'

import {
  globalStyles,
  cubicBezier,
  variables,
} from '../../styles'

const SideBar = styled.div`
  padding: 20px 0;
  width: 260px;
  background: ${variables.color.gray2};
  border-right: 1px solid ${variables.color.gray3};
`

const Content = styled.div`
  padding: 20px 16px;
  display: flex;
  flex-direction: row;
  flex: 1;
`

const Menu = styled.ul`
  padding: 0 16px;
`

const MenuItem = styled.li`
  list-style: none;
  transition: all .25s ${cubicBezier};
  &:hover {
    cursor: pointer;
    background: ${variables.color.azureishWhite};
  }
`

class Lodex extends React.Component {
  render() {
    return (
      <LayoutFlex>
        <SideBar>
          <Menu>
            <MenuItem>
              도감 메뉴
            </MenuItem>
          </Menu>
        </SideBar>
        <Content>
          여긴 도감 나올껴
        </Content>
      </LayoutFlex>
    )
  }
}

export default Lodex
