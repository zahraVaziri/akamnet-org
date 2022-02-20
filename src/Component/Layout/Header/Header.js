
import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import StarrySky from "./Star";


 window.onscroll = function() {myFunction()};
  
    function myFunction() {
      let header = document.getElementById("bg-navbar");
      if (header) {
        if (window.pageYOffset > 0) {
        
          header.classList.add("bg-navbar-sticky");
      } else {
          header.classList.remove("bg-navbar-sticky");
      }
      }
      
  }


const Header = () => {
 useEffect( () => {
    if(document.getElementsByClassName('AKMparallax')[0]){
            let parallaxElements = document.getElementsByClassName('AKMparallax');
            let parallaxQuantity = parallaxElements.length;
            let parallaxElements2 = document.getElementsByClassName('AKMparallax2');
            let parallaxQuantity2 = parallaxElements2.length;
            let parallaxElements3 = document.getElementsByClassName('AKMparallax3');
            let parallaxQuantity3 = parallaxElements3.length;
            let parallaxElements4 = document.getElementsByClassName('AKMparallax4');
            let parallaxQuantity4 = parallaxElements4.length;
            let parallaxElements5 = document.getElementsByClassName('AKMparallax5');
            let parallaxQuantity5 = parallaxElements5.length;
            window.addEventListener('scroll', () => {
                window.requestAnimationFrame(function () {
                    let scrolled0 = window.pageYOffset;
                    if (scrolled0 < 1000) {
                        for (let i = 0; i < parallaxQuantity; i++) {
                            let currentElement = parallaxElements[i];
                            if (currentElement) {
                                currentElement.style.backgroundPosition = 'center ' + -scrolled0 * 1.35 + 'px';
                            }
                        }
                        for (let i = 0; i < parallaxQuantity2; i++) {
                            let currentElement2 = parallaxElements2[i];
                            if (currentElement2) {
                                currentElement2.style.marginTop = -scrolled0 * 0.06 + '%';
                            }
                        }
                        for (let i = 0; i < parallaxQuantity3; i++) {
                            let currentElement3 = parallaxElements3[i];
                            if (currentElement3) {
                                currentElement3.style.transform = 'translate(' + scrolled0 * 0.45 + 'px ,' + (0 - scrolled0 * 0.45) + 'px)';
                                currentElement3.style.transition = 'none';
                            }
                        }
                        for (let i = 0; i < parallaxQuantity4; i++) {
                            let currentElement4 = parallaxElements4[i];
                            if (currentElement4) {
                                currentElement4.style.transform = 'translate(' + (0 - scrolled0 * 0.45) + 'px ,' + (0 - scrolled0 * 0.45) + 'px)';
                                currentElement4.style.transition = 'none';
                            }
                        }
                        for (let i = 0; i < parallaxQuantity5; i++) {
                            let currentElement5 = parallaxElements5[i];
                            if (currentElement5) {
                                currentElement5.style.transform = 'translateY(' + -scrolled0 + 'px)';
                                currentElement5.style.zIndex = 4;
                                if (scrolled0 > 230) {
                                    currentElement5.style.zIndex = 2;
                                }
                            }
                        }
                    }
                });
            });
        }
  })
  return (
    <div>
      <Navbar/>
      <div className="akam-head AKMparallax">
        <div className="akam-overly"></div>
        <div className="container d-flex justify-content-center align-items-center w-100 pt-3 ">
           <StarrySky/>
           <div class="akm-bg-note-rl">
             <div class="akm-bg-note-r AKMparallax3 aos-init aos-animate" data-aos="fade-up-right" data-aos-delay="1000" style={{transform: 'translate(0px, 0px)', transition: 'none 0s ease 0s'}}>
               
               </div>
               <div class="akm-bg-note-l AKMparallax4 aos-init aos-animate" data-aos="fade-up-left" data-aos-delay="1000"  style={{transform: 'translate(0px, 0px)', transition: 'none 0s ease 0s'}}>
               
                 </div>
                 </div>
            <div className=" row justify-content-center pt-2">
              <div class="col-12 col-lg-7 my-auto px-xl-5">
                <h3  class="akamnet-title-sf mb-3 font-titles " data-aos="zoom-in">پیش گام با آکام در ایران</h3>
                <p class="akm-text-st px-xl-5 " data-aos="fade-up" data-aos-delay="400">
                  وزیلی متخصصان حوزه نرم افزار را گردهم آورده تا با ارائه راهکارهای نرم افزاری نوآورانه، شریک نوآوری کسب و کار و سازمان شما باشد.
                  </p>
              </div>
            </div>   
        </div>
        <div className="container w-100 py-4">
          <div className="row row-laptop">
            <div className="col-lg-9 col-xl-8 col-xxl-7 my-auto ">
              <div className="akam-laptop" data-aos="fade-up" data-aos-delay="800" >
                <div className="akam-laptop-back">
                  <div className="akm-bg-lap">
                    <div className="akam-img-ham">
                      <img src="https://akamnet.com/static/media/hamsaz-site.f677c1f1.jpg" className="AKMparallax5" width={'100%'}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

 


 
