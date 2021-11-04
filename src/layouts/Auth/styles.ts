import styled from 'styled-components'
import { Layout, Menu } from 'antd';

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
position: relative;
`
export const MobileContentContainer =styled(ContentContainer)`
background-position: left top ;
`

export const Sider = styled(Layout.Sider)`

`
export const MenuItem = styled(Menu.Item)`
`
export const MenuItemContent = styled.div`
display: flex;
justify-content:space-evenly;
align-items: center;
`