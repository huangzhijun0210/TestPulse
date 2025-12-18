import React from 'react';
import { Spin } from 'antd';

const containerStyle: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

};

const App: React.FC = () => (
  <div style={containerStyle}>
    <Spin size="large" tip="Loading...">
    </Spin>
  </div>
);

export default App;
