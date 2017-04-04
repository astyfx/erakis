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
`

const Dice4 = styled(DiceImage)`
  width: 40px;
  height: 36px;
  background-size: 192px;
  background-position: 152px 60px;
  background-image: url(https://github.com/astyfx/erakis/blob/master/main/static/images/dice_4.png?raw=true);
`
const Dice6 = styled(DiceImage)`
  width: 40px;
  height: 36px;
  background-size: 192px;
  background-position: 152px 60px;
  background-image: url(https://github.com/astyfx/erakis/blob/master/main/static/images/dice_6.png?raw=true);
`
const Dice10 = styled(DiceImage)`
  width: 40px;
  height: 36px;
  background-size: 192px;
  background-position: 152px 60px;
  background-image: url(https://github.com/astyfx/erakis/blob/master/main/static/images/dice_10.png?raw=true);
`

class DicerRow extends React.Component {
  constructor(props) {
    super(props)

    this.renderDice = this.renderDice.bind(this)
  }

  renderDice(dicer) {
    if (dicer.diceType === '44') {
      return (
        <div>
          <Dice4 />
          <Dice4 />
        </div>
      )
    }
  }

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
          {this.renderDice(item)}
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
