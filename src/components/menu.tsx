import React, { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { adminMenus,superAdminMenus } from '@/router/config';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '@/layout.module.scss'

type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = superAdminMenus;


const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [current, setCurrent] = useState('mail');

  useEffect(() => {
    setCurrent(location.pathname.split('/')[1])
  }, [])

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    navigate(e.key)
  };

  return (
    <>
      <div className={styles.menus}>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </div>
    </>
  )
};

export default App;