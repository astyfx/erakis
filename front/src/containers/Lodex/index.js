import React from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components'

import { LayoutFlex } from '../../components/Layout'
import Card from '../../components/Card'

import {
  fetchLodex,
} from '../../actions'

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

const Dicers = styled.div`
  flex: 1;
`

class Lodex extends React.Component {
  componentWillMount() {
    this.props.fetchLodex()
  }
  render() {
    const { lodex } = this.props

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
          <Dicers>
            {lodex.items.map(dicer => {
              console.log(dicer)
              return (
                <Card>
                  <div>
                    <img
                      src={dicer.imageThumbnail}
                      alt=""
                    />
                    <h3>{dicer.name} / {dicer.grade}성</h3>
                    <h4>{dicer.attackType} / {dicer.diceType} / {dicer.chargeType}</h4>
                  </div>
                </Card>
              )
            })}
          </Dicers>
        </Content>
      </LayoutFlex>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lodex: state.lodex,
  }
}

export default connect(mapStateToProps, {
  fetchLodex,
})(Lodex)
