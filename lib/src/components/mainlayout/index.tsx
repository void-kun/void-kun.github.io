import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header';
import SideBar from '../sidebar';

const MainLayout = () => {
  return (
    <>
      <SideBar />
      <div className="pl-8 pr-8 flex-1">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
