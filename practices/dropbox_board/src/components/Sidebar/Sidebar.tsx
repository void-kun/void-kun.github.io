import React, { useState } from 'react';
import logo from './../../assets/core/logo.svg';
import home from './../../assets/core/home.svg';
import files from './../../assets/core/files.svg';
import star from './../../assets/core/star.svg';
import file_request from './../../assets/core/file-request.svg';
import share from './../../assets/core/share.svg';
import deleted from './../../assets/core/delete.svg';

import './Sidebar.scss';

const sidebarMenu: Array<any> = [
  {
    icon: home,
    label: 'Home',
    path: '/',
    isActive: true
  },{
    icon: files,
    label: 'My Files',
    path: '/my_files',
    isActive: false
  },{
    icon: star,
    label: 'Starred',
    path: '/starred',
    isActive: false
  },{
    icon: file_request,
    label: 'Files Requests',
    path: '/file_request',
    isActive: false
  },{
    icon: share,
    label: 'Shared',
    path: '/shared',
    isActive: false
  },{
    icon: deleted,
    label: 'Deleted',
    path: '/deleted',
    isActive: false
  },
]

const Sidebar = () => {

  const [menuItems, setMenuItems] = useState(sidebarMenu);

  return (
    <div className='sidebar sidebar-wrapper'>
        <div className='sidebar__logo'>
          <img src={logo} alt='Dropbox' />
        </div>
        <nav className='sidebar__navbar'>
          <ul className='sidebar__navbar-items'>
            {menuItems &&
            menuItems.map((item) => (
              <li className='sidebar__navbar-item'>
                <img src={item.icon} alt={item.label} />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </nav>
        <div className='sidebar__inuse'>
          <img src="#" alt="" />
          <div className='sidebar__inuse-progress'>
            <label htmlFor="inuse-progress">75% In-use</label>
            <div className='inuse-progress progress-bar'>
              <span className='inuse-progress__begin'>600GB</span>
              <span className='inuse-progress__end'>800GB</span>
            </div>
            <button className='upgrade-button btn btn-primary'>Upgrade</button>
          </div>
        </div>
    </div>
  )
}

export default Sidebar; 