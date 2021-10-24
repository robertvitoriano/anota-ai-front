import React,{ useState } from 'react'

import { Layout as AndDesignLayout, Menu } from 'antd';
import {PieChartOutlined} from '@ant-design/icons';

import {ContentContainer, Sider} from './styles'

import backgroundImage from 'assets/notes_list_background.jpg'

const {Content} = AndDesignLayout;

type Props = {
  children: React.ReactChild | React.ReactChild[]
}

export default function Layout({children}:Props) {

  const  [collapsed, setCollapsed]  = useState(false);

  const onCollapse = (collapsed:boolean) => {
   setCollapsed(collapsed)
  };
 
    return (
      <AndDesignLayout style={{ minHeight: '100%' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{backgroundColor:'white'}}>
          <Menu  mode="inline" style={{marginTop:'25px'}}>
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
          </Menu>
        </Sider>
        <AndDesignLayout className="site-layout">
          <Content>
            <ContentContainer className="site-layout-background" style={{ minHeight: 360 }} backgroundImage = {backgroundImage}>
              {children}
            </ContentContainer>
          </Content>
        </AndDesignLayout>
      </AndDesignLayout>
    );
}

