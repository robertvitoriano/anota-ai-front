
import { Sider, MenuItem, MenuItemContent } from './styles';
import { Menu } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { setCollapsed } from 'store/modules/sidebar/reducer';
import DynamicIcon from 'components/DynamicIcon';
import { commonRoutes } from 'routes';
import { IReduxState } from 'store/types';
export default function SideBar() {

  const collapsed = useSelector((state:IReduxState) => state.sidebar.collapsed)
  const dispatch = useDispatch()

  const onCollapse = (collapsed: boolean) => {
    dispatch(setCollapsed(collapsed))
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ backgroundColor: 'white' }}>
      <Menu mode="inline" style={{ marginTop: '25px' }}>
        {commonRoutes.map((route, index) => (
          <MenuItem key={index}>
            <MenuItemContent>
              <DynamicIcon type={route.icon} />
              {!collapsed ? route.title : ''}
            </MenuItemContent>
          </MenuItem>)
        )}
      </Menu>
    </Sider>
  )
}