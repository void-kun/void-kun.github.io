import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

type MenuTab = {
  name: string;
  isActive: boolean;
  path: string;
};

const initMenuTabs: Array<MenuTab> = [
  {
    name: 'posts',
    path: '/posts',
    isActive: true,
  },
  {
    name: 'categories',
    path: '/categories',
    isActive: false,
  },
  {
    name: 'photos',
    path: '/photos',
    isActive: false,
  },
];

const SideBar = () => {
  let { pathname } = useLocation();
  const [menuTabs, setMenuTabs] = useState<Array<MenuTab>>(initMenuTabs);

  useEffect(() => {
    const name = pathname.replace('/', '');
    setMenuTabs(
      initMenuTabs.map((tab) => ({
        ...tab,
        isActive: tab.name === name || (name === '' && tab.name === 'posts'),
      }))
    );
  }, [pathname]);

  return (
    <div className="sm:w-72 w-full sm:h-full h-max flex flex-col content-center bg-brown text-text-light relative sm:fixed">
      <div className="w-full flex flex-col gap-3 mt-12 mb-12">
        <div className="flex gap-4 m-auto">
          <div className="w-28 flex flex-col gap-2">
            <img src={logo} className="object-cover" alt="hoang zrik" />
            <span className="w-full h-[5px] bg-brown-dark"></span>
          </div>
          <span className="text-lg font-semibold uppercase self-end">hoang zrik</span>
        </div>
        <span className="text-base font-medium p-4 pt-2 text-center">
          Blog tôi viết về những thứ tôi thấy, tôi học được :D
        </span>
      </div>
      <div>
        <ul>
          {menuTabs.map((tab: MenuTab) => (
            <li key={tab.name}>
              <Link
                className={`list-none cursor-pointer h-11 font-medium flex items-center
                            mb-2 sm:ml-auto sm:mr-4 justify-center hover:bg-brown-light 
                            w-full sm:w-48 sm:pl-20 sm:justify-start
              ${tab.isActive && 'bg-brown-light'}`}
                to={tab.path}
              >
                {tab.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
