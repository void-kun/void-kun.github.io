import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header';
import SideBar from '../sidebar';

const MainLayout = () => {
  return (
    <>
      <SideBar />
      <div className="sm:ml-72 pl-4 pr-4 md:pl-8 md:pr-8 flex-1">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
