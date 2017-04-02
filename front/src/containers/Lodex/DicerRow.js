import React from 'react'
import Checkbox from '../../components/Checkbox'
import {
  Row,
  Column,
  ColumnFlex,
} from '../../components/Table'

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
          {item.diceType}
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
