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
  background-repeat: no-repeat;
  width: 56px;
  height: 56px;
  ${props => {
    if (props.dice === '4') {
      return css`
        background-position: -114px 0;
      `
    } else if (props.dice === '44') {
      return css`
        background-position: 0 0;
      `
    } else if (props.dice === '6') {
      return css`
        background-position: -176px 0;
      `
    } else if (props.dice === '66') {
      return css`
        background-position: -57px 0;
      `
    } else if (props.dice === '10') {
      return css`
        background-position: -232px 0;
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

    const renderAttack = (attackType) => {
      switch (attackType) {
        case 'MELEE':
          return '주먹'
        case 'MAGIC':
          return '마법'
        case 'SPEAR':
          return '관통'
        case 'SNIPER':
          return '저격'
        case 'WHIRLWIND':
          return '휠윈드'
        case 'BOMBER':
          return '폭격'
      }
    }

    return (
      <Row
        selected={checked[index]}
      >
        {/* <Column
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
        </Column> */}
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
          {renderAttack(item.attackType)}
        </ColumnFlex>
        <ColumnFlex
          onClick={e => { this.props.onClick(item) }}
        >
          <DiceImage
            dice={'6'}
          />
        </ColumnFlex>
        <ColumnFlex
          onClick={e => { this.props.onClick(item) }}
        >
          {item.chargeType === 'BLUE' ? '파란 차지': '붉은 차지'}
        </ColumnFlex>
      </Row>
    )
  }
}

export default DicerRow
