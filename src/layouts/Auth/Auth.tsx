import React, { useState } from 'react'
import { Layout as AndDesignLayout, Menu } from 'antd';
import { PieChartOutlined, HomeFilled } from '@ant-design/icons';
import { ContentContainer, Sider, MobileContentContainer, MenuItem, MenuItemContent } from './styles';
import backgroundImage from 'assets/notes_list_background.jpg'
import { PhoneBreakPoint, DesktopBreakPoint } from 'components/responsive_utilities'
import LogoutButton from 'components/LogoutButton';
import BackButton from 'components/BackButton'
import Sidebar from 'components/Sidebar';

const { Content } = AndDesignLayout;

type Props = {
  children: React.ReactChild | React.ReactChild[]
}

export default function Layout({ children }: Props) {

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed)
  };

  return (
    <>
      <DesktopBreakPoint>
        <AndDesignLayout style={{ minHeight: '100%' }}> 
        <Sidebar/>
          <AndDesignLayout className="site-layout">
            <Content>
              <ContentContainer className="site-layout-background" style={{ minHeight: 360 }} backgroundImage={backgroundImage}>
                <BackButton />
                {children}
                <LogoutButton />
              </ContentContainer>
            </Content>
          </AndDesignLayout>
        </AndDesignLayout>
      </DesktopBreakPoint>
      <PhoneBreakPoint>
        <AndDesignLayout className="site-layout">
          <Content>
            <MobileContentContainer className="site-layout-background" style={{ minHeight: 360 }} backgroundImage={backgroundImage} >
              <BackButton />
              {children}
              <LogoutButton />
            </MobileContentContainer>
          </Content>
        </AndDesignLayout>
      </PhoneBreakPoint>
    </>
  );
}

