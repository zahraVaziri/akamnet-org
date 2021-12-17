import React from 'react';

import { toggleDrawer, useLayoutDispatch, useLayoutState } from '../context/LayoutContext';

import { HashLink } from 'react-router-hash-link';
import './MenuDrawer.css'
import { Drawer } from '@mui/material';
import { Form, FormControl } from 'react-bootstrap';
const MenuDrawer = () => {

  const { drawerOpen } = useLayoutState();
  const LayoutDispatch = useLayoutDispatch()

  return (
    <Drawer className={'drawer'} anchor={'right'} open={drawerOpen} onClose={() => { toggleDrawer(LayoutDispatch) }}>
      <ul className={'menu'} >
                    <li className={'menuItem'} >
                        <HashLink className={'menuLink'} smooth to="/">
                          خانه
                        </HashLink>
                    </li>
                 
                    <li className={'menuItem'}>
                       <HashLink className={'menuLink'} smooth to="/#service" onClick={() => { toggleDrawer(LayoutDispatch) }}>
                         خدمات
                      </HashLink>
                    </li>
                     <li className={'menuItem'}>
                       <HashLink className={'menuLink'} smooth to="/#custom" onClick={() => { toggleDrawer(LayoutDispatch) }}>
                        مشتریان
                      </HashLink>
                    </li>
                    <li className={'menuItem'}>
                      <HashLink className={'menuLink'} smooth to="/#how" onClick={() => { toggleDrawer(LayoutDispatch) }}>
                      روندها
                      </HashLink>
                    </li>
                    <li className={'menuItem'}>
                      <HashLink className={'menuLink'} smooth to="/#project" onClick={() => { toggleDrawer(LayoutDispatch) }}>
                      پروژه ها 
                      </HashLink>
                    </li>
                    <li className={'menuItem'}>
                      <HashLink className={'menuLink'} smooth to="/work" onClick={() => { toggleDrawer(LayoutDispatch) }}>
                      همکاری
                      </HashLink>
                    </li>
                   
                   
                  </ul>
    </Drawer>
  )
}
export default MenuDrawer