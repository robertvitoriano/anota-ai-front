
import {  Sider,  MenuItem, MenuItemContent } from './styles';
import { HomeFilled } from '@ant-design/icons';
import {  Menu } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { setCollapsed } from 'store/modules/sidebar/reducer';

export default function SideBar() {
  //@ts-ignore
  const collapsed = useSelector((state) => state.sidebar.collapsed)
  const dispatch = useDispatch()

  const onCollapse = (collapsed: boolean) => {
    dispatch(setCollapsed(collapsed))
  };

  return(
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ backgroundColor: 'white' }}>
    <Menu mode="inline" style={{ marginTop: '25px' }}>
      <MenuItem key="1">
        <MenuItemContent>
          <HomeFilled />
          {!collapsed ? 'Home' : ''}
        </MenuItemContent>
      </MenuItem>
    </Menu>
  </Sider>
  )
}