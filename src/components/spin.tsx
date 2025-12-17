import React from 'react';
import { Alert, Flex, Spin } from 'antd';

const contentStyle: React.CSSProperties = {
  padding: 50,
  background: 'white',
  borderRadius: 4,
};

const content = <div style={contentStyle} />;

const App: React.FC = () => (
 
    <Flex gap="middle">
      <Spin tip="加载中" size="large">
        {content}
      </Spin>
    </Flex>

);

export default App;