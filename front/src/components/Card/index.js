import React from 'react'
import styled, { css } from 'styled-components'

const StyledCard = styled.div`
  padding: 20px;
  background: white;
  border-radius: 3px;
  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 1px 1px rgba(16, 22, 26, 0.2);
  transition: all .25s ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
  }
`

const Card = ({ children, ...props }) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  )
}

export default Card
