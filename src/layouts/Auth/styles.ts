import styled from 'styled-components'
import { Layout } from 'antd';

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
export const MobileContentContainer =styled(ContentContainer)`
background-position: left top ;
`

export const Sider = styled(Layout.Sider)`

`