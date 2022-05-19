import React from 'react';
import { Layout } from 'antd';
import Students from './Students';

const { Header, Content } = Layout;

class MySider extends React.Component {
  render() {
    return (
      <Layout>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 600,
            }}
          >

            <Students/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MySider;