import React from 'react'
import { CopyrightContainer, CopyrightText } from './styles'

interface Props {
  text: string
}

const Copyright = ({text}:Props)=>{

  return(
    <CopyrightContainer>
      <CopyrightText>{text}</CopyrightText>
    </CopyrightContainer>
  )
}

export default Copyright