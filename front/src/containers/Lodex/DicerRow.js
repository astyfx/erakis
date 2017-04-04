import React from 'react'
import styled, { css } from 'styled-components'
import Checkbox from '../../components/Checkbox'
import {
  Row,
  Column,
  ColumnFlex,
} from '../../components/Table'

const DiceImage = styled.div`
  display: inline-block;
  background-image: url(https://github.com/astyfx/erakis/blob/master/main/static/images/dicelist.png?raw=true);
  ${props => {
    if (props.dice === '4') {
      return css`
        width: 40px;
        height: 55px;
        background-position: 152px 0;
      `
    } else if (props.dice === '44') {
      return css`
        width: 40px;
        height: 55px;
        background-position: 152px 0;
      `
    } else if (props.dice === '6') {
      return css`
        width: 40px;
        height: 55px;
        background-position: 152px 0;
      `
    } else if (props.dice === '66') {
      return css`
        width: 40px;
        height: 55px;
        background-position: 152px 0;
      `
    } else if (props.dice === '10') {
      return css`
        width: 40px;
        height: 55px;
        background-position: 152px 0;
      `
    }
  }}
`

class DicerRow extends React.Component {
  render() {
    const {
      item,
      checked,
      index,
      handleCheckboxChange,
    } = this.props

    return (
      <Row
        selected={checked[index]}
      >
        <Column
          width="38px"
        >
          <Checkbox
            checked={checked[index]}
            onClick={() => handleCheckboxChange(!checked[index], index, item)}
          />
        </Column>
        <Column
          width="62px"
          onClick={e => { this.props.onClick(item) }}
        >
          #{item.id}
        </Column>
        <Column
          width="80px"
          onClick={e => { this.props.onClick(item) }}
        >
          <img
            src={item.imageThumbnail}
            alt=""
            style={{
              width: 60,
              height: 60,
              borderRadius: '12px',
            }}
          />
        </Column>
        <Column
          width="132px"
          onClick={e => { this.props.onClick(item) }}
        >
          {item.name} / {item.grade}
        </Column>
        <ColumnFlex
          onClick={e => { this.props.onClick(item) }}
        >
          {item.attackType}
        </ColumnFlex>
        <ColumnFlex
          onClick={e => { this.props.onClick(item) }}
        >
          <DiceImage
            dice={item.diceType}
          />
        </ColumnFlex>
        <ColumnFlex
          onClick={e => { this.props.onClick(item) }}
        >
          {item.chargeType}
        </ColumnFlex>
      </Row>
    )
  }
}

export default DicerRow
