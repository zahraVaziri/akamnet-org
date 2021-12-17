import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Loading from "./Loading/Loading";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";

 

const Layout = () => {
   const[loading,setLoading] = useState(true)


 

  const [show,setShow] = useState()
  const location = useLocation()

  useEffect( ()=> {
    setLoading(true)
  },[])


  useEffect(() => {
  if (location.pathname == "/") {
    setLoading(false) 
    setShow( false)
  } else {
    setShow(true)
    setLoading(false) 
    setInterval(() => {
       setLoading(false) 
    }, 6000);
  }
})
  return (
    <div>
      
      {
        
        loading ? ( show ? <Loading/>  : <div> <Loading/> </div>) : <> <Header/> <Main/> <Footer/> </>
      }
      

      
    </div>
  );
}

export default Layout;
