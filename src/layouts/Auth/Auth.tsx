import React from 'react'
import{ Wrapper} from './styles'

type Props = {
  children: React.ReactChild | React.ReactChild[]
}

export default function Auth({children}:Props){

  return <Wrapper>
    {children}
    </Wrapper>

}

