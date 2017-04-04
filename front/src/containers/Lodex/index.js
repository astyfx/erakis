import React from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components'

import { LayoutFlex } from '../../components/Layout'
import Card from '../../components/Card'
import {
  Table,
  Header,
  Body,
  Row,
  Column,
  ColumnFlex,
} from '../../components/Table'
import Checkbox from '../../components/Checkbox'

import DicerRow from './DicerRow'

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
  padding: 0;
`

const MenuItem = styled.li`
  list-style: none;
  transition: all .25s ${cubicBezier};
  padding: 4px 16px;
  margin: 8px 0;
  &:hover {
    cursor: pointer;
    background: ${variables.color.azureishWhite};
  }
`

const Dicers = styled.div`
  flex: 1;
  display: flex;
  ${Table} {
    flex: 1;
  }
`

class Lodex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: props.lodex.items.map(() => false),
      selectedItems: [],
      isAllChecked: false,
    }

    this.setCheckboxStatus = this.setCheckboxStatus.bind(this)
    this.selectAll = this.selectAll.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }

  componentWillMount() {
    this.props.fetchLodex()
  }

  setCheckboxStatus(checked, selectedItems) {
    this.setState({
      checked,
      selectedItems,
      isAllChecked: checked.filter((c) => {
        return c
      }).length === checked.length || checked.filter((c) => {
        return !c
      }).length === checked.length,
    })
  }

  selectAll(checked) {
    // Set all checked states to true
    const checkedAll = [...this.state.checked].map(() => checked)
    const selectedItems = checked ? this.props.lodex.items : []

    this.setState({
      checked: checkedAll,
      isAllChecked: true,
      selectedItems,
    })
  }

  handleCheckboxChange(nextCheck, index, item) {
    const checked = [...this.state.checked]
    checked[index] = nextCheck

    const selectedItems = nextCheck ? [...this.state.selectedItems, item] : this.state.selectedItems.filter(selected => {
      return selected !== item
    })

    this.setCheckboxStatus(checked, selectedItems)
  }

  render() {
    const { lodex } = this.props

    const {
      isAllChecked,
      checked,
    } = this.state

    const checkedLength = checked.filter(checkedItem => checkedItem === true).length

    return (
      <LayoutFlex>
        <SideBar>
          <Menu>
            <MenuItem>
              5성 다이서
            </MenuItem>
            <MenuItem>
              4성 다이서
            </MenuItem>
            <MenuItem>
              3성 다이서
            </MenuItem>
          </Menu>
        </SideBar>
        <Content>
          <Dicers>
            <Table>
              <Header>
                {/* <Column
                  width="38px"
                >
                  <Checkbox
                    onClick={() => {
                      this.selectAll(!(checkedLength !== 0 && isAllChecked))
                    }}
                    checked={checkedLength !== 0 && isAllChecked}
                  />
                </Column>
                <Column
                  width="62px"
                >
                  ID
                </Column> */}
                <Column
                  width="80px"
                >
                  이미지
                </Column>
                <Column
                  width="132px"
                >
                  이름 / 등급
                </Column>
                <ColumnFlex>
                  타입
                </ColumnFlex>
                <ColumnFlex>
                  주사위
                </ColumnFlex>
                <ColumnFlex>
                  차지
                </ColumnFlex>
              </Header>
              <Body>
                {lodex.items.map((dicer, index) => {
                  return (
                    <DicerRow
                      key={`dicer_${dicer.id}`}
                      item={dicer}
                      checked={checked}
                      index={index}
                      handleCheckboxChange={this.handleCheckboxChange}
                      onClick={() => {

                      }}
                    />
                  )
                })}
              </Body>
            </Table>
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
