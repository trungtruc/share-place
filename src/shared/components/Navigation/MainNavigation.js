import React, { Fragment } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';


import './MainNavigation.css';
import Backdrop from '../UIElements/Backdrop';



const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  return (
    <Fragment>
      {
        drawerIsOpen && 
        <Backdrop onClick={event => setDrawerIsOpen(false)} />
      }
      { drawerIsOpen &&
      <SideDrawer show={drawerIsOpen}>
        <nav className='main-navigation__drawer-nav'>
          <NavLinks />
        </nav>
      </SideDrawer>
      }
      <MainHeader>
        <button className='main-navigation__menu-btn' onClick={event => setDrawerIsOpen(prevDrawerIsOpen => !prevDrawerIsOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className='main-navigation__title'>
          YourPlaces
        </h1>
        <nav className='main-navigation__header-nav'>
          <NavLinks />
        </nav>
      </MainHeader>
    </Fragment>
  )
};
export default MainNavigation;