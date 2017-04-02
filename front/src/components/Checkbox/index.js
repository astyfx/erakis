import React from 'react'

import styled from 'styled-components'

import {
  variables,
  cubicBezier,
} from '../../styles'

const Indicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  background-color: white;
  width: 14px;
  height: 14px;
  line-height: 1rem;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid ${variables.color.gray3};
  border-radius: 2px;
  background-repeat: no-repeat;
  background-position: center center;
  transition: all .25s ${cubicBezier};
`

const StyledCheckbox = styled.label`
  position: relative;
  display: inline;
  padding-left: 14px;
  color: ${variables.color.darkest};
  cursor: pointer;
  vertical-align: middle;
  > input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    &:checked {
      ~${Indicator} {
        color: ${variables.color.blue7};
        border: 1px solid ${variables.color.blue7};
      }
    }
  }

  input {
    &:checked {
      ~${Indicator} {
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIxMHB4IiBoZWlnaHQ9IjEwcHgiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAgMTAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGZpbGw9IiM2RTVCQUEiIGQ9Ik0zLjMyNyw5LjEzM2MtMC4yNjgsMC0wLjUyMy0wLjExMS0wLjcwNC0wLjMwOUwwLDUuOTYybDEuNDA3LTEuMjg5bDEuOTEsMi4wODVsNS4yNi01Ljg5MUwxMCwyLjEzOEw0LjAzOCw4LjgxNGMtMC4xOCwwLjIwMS0wLjQzNiwwLjMxNi0wLjcwNSwwLjMxOEMzLjMzMSw5LjEzMywzLjMyOCw5LjEzMywzLjMyNyw5LjEzM3oiLz48L2c+PC9zdmc+);
      }
    }
    &[disabled] {
      ~${Indicator} {
        border: 1px solid ${variables.color.gray3};
        background-image: none;
        background-color: ${variables.color.gray3};
      }
    }
    &[readonly] {
      ~${Indicator} {
        border: 1px solid ${variables.color.gray3};
        background-image: none;
        background-color: ${variables.color.gray3};
      }
    }
  }
`

const Checkbox = ({ styles, checked, onChange, onClick, disabled, useDiv, ...rest }) => {
  return (
    <StyledCheckbox
      style={styles}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        onClick={onClick}
        disabled={disabled}
      />
      <Indicator />
      {rest.inner}
    </StyledCheckbox>
  )
}

export default Checkbox
