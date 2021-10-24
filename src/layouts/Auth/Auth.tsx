import React from 'react'

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

type Props = {
  children: React.ReactChild | React.ReactChild[]
}

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed:boolean) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
 
  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100%' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{marginTop:'25px'}}>
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content>
            <div className="site-layout-background" style={{ minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo