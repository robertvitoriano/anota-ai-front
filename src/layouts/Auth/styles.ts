import styled from 'styled-components'

interface Props {
  backgroundImage:any
  }

export const Wrapper = styled.div`

`

export const ContentContainer =styled.div<Pick<Props, 'backgroundImage'>>`
background-image: url('${(props) => props.backgroundImage}') ;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`