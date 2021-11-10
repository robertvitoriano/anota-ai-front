
import {  Sider,  MenuItem, MenuItemContent } from './styles';
import {  Menu } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { setCollapsed } from 'store/modules/sidebar/reducer';
import DynamicIcon from 'components/DynamicIcon';
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
        <DynamicIcon type={'HomeFilled'} />
          {!collapsed ? 'Home' : ''}
        </MenuItemContent>
      </MenuItem>
    </Menu>
  </Sider>
  )
}