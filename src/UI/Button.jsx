import React from 'react'
import styled from 'styled-components'

export const Button = ({children}) => {
  return (
   <StyledButton>{children}</StyledButton>
  )
}

const StyledButton = styled('button') `
     width: 90px;
        height: 30px;
        border: none;
        border-radius: 10px;
        color:white;
        background-color: #137565;
        font-weight:700;
`