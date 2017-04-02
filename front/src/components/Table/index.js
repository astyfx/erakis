import React from 'react'

import styled, { css } from 'styled-components'

import {
  cubicBezier,
  variables,
} from '../../styles'

const RowDefault = styled.div`
  display: flex;
`

const Row = styled(RowDefault)`
  font-size: 13px;
  color: ${variables.color.gray8};
  background: #ffffff;
  overflow: hidden;
  position: relative;
  padding: 0 12px;
  transition: all .25s ${cubicBezier};
  &:first-child {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    &:hover {
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }
  }
  &:last-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    &:hover {
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
  &:hover {
    cursor: pointer;
    border-radius: 0;
    box-shadow: 0 1px 2px rgba(43, 59, 93, .29), 0 0 13px rgba(43, 59, 93, .29);
    z-index: 2;
  }
  &:before {
    position: absolute;
    content: "";
    width: 4px;
    left: 0;
    bottom: 0;
    top: 0;
    background: transparent;
    transition: all .25s ${cubicBezier};
  }
  ${props => {
    if (props.selected) {
      return css`
        &:before {
          position: absolute;
          content: "";
          width: 4px;
          left: 0;
          bottom: 0;
          top: 0;
          background: ${variables.color.pictorialCarmine};
        }
      `
    }

    if (props.disable) {
      return css`
        background: #fafbfc;
        color: #67769a;
        &:hover {
          cursor: default;
          box-shadow: 0 1px 4px rgba(0, 0, 0, .1);
        }
      `
    }
  }}
`

const ColumnComponent = ({ children, width, ...props }) => {
  const exactProps = Object.assign({}, props)
  delete exactProps.style
  const styles = Object.assign({}, props.style, {
    width,
  })
  return (
    <div
      style={styles}
      {...exactProps}
    >
      {children}
    </div>
  )
}

const Column = styled(ColumnComponent)`
  padding: 17px 0;
`

const ColumnFlex = styled(ColumnComponent)`
  flex: 1;
  padding: 17px 0;
`

const Header = styled.div`
  display: flex;
  color: #8090b4;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .85px;
  text-transform: uppercase;
  padding: 15px 12px;
  ${Column},
  ${ColumnFlex} {
    padding: 0;
  }
`

const Body = styled.div`
  border: 1px solid #d0d8e7;
  border-radius: 3px;
  ${Row} + ${Row} {
    border-top: 1px solid #d0d8e7;
    &:hover {
      border-top: 1px solid transparent;
      +${Row} {
        border-top: 1px solid transparent;
      }
    }
  }
`

const Table = styled.div``

export { Table, Header, Body, Row, RowDefault, Column, ColumnFlex }
