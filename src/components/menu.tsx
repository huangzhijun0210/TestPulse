import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { adminMenus } from '@/router/config';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = adminMenus;


const App: React.FC = () => {
  const navigate = useNavigate();  
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    navigate(e.key)
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default App;