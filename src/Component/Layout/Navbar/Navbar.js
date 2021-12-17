import { Grid, IconButton, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { toggleDrawer, useLayoutDispatch } from "../../context/LayoutContext";
import MenuDrawer from "../../drawer/MenuDrawer";
import './Navbar.css';
import svg from './logo.svg';

const Navbar =() => {
 
  const theme = useTheme();
  const isTabletSize = useMediaQuery(theme.breakpoints.down('md'));
  const LayoutDispatch = useLayoutDispatch();

  

  return (
    <div>
      <div id="bg-navbar" className={' mt-0'} >
        <div className={"container"}>
          <Grid container spacing={1} style={{justifyContent:'space-between'}} >
            <Grid item  md={3} className="grid-right-nav"  style={{paddingLeft:'1rem'}}>
              <Link  to="/" className={'header-brand'}>
                <img src={svg} alt={'23'} />
              </Link>
            </Grid>
            <Grid item  md={9}  className={'grid-left-nav'}>
              <div className="text-end-nav" >   
                {isTabletSize && <IconButton onClick={() => toggleDrawer(LayoutDispatch)}><i className="fa fa-bars text-light " style={{outline:'unset',color:'black', padding:'25px'}} aria-hidden="true"></i></IconButton>}  
                {isTabletSize ? <MenuDrawer/> :
                  <ul className={'ul-nav-homepage'} >
                    
                      <HashLink smooth to="/">
                        <li>
                         خانه 
                        </li>
                      </HashLink>
                    
                      <HashLink smooth to="/#service">
                        <li>
                        خدمات
                        </li>
                      </HashLink>
                    
                    
                      <HashLink smooth to="/#custom">
                        <li>
                        مشتریان 
                        </li>
                      </HashLink>
                    
                    
                      <HashLink smooth  to="/#how">
                      <li>
                          روندها
                      </li>
                      </HashLink>
                    
                    
                      <HashLink smooth  to="/#project">
                        <li>
                         
                          پروژه ها
                        </li>
                      </HashLink>
                    
                    
                      <Link  to="/work">
                        <li>
                          همکاری با ما
                        </li>
                      </Link>
                    
                  </ul>
                }
              </div>   
            </Grid> 
          </Grid>
        </div>
      </div>
     
    </div>
    
  );
}

export default Navbar;
