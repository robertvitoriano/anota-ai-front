import React from 'react'
import{ Wrapper} from './styles'

type Props = {
  children: React.ReactChild | React.ReactChild[]
}

export default function Auth({children}:Props){

  console.log(children)
  return <Wrapper>
    <h1>Hello World</h1>
    {children}
    </Wrapper>

}

