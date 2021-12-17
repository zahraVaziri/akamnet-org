import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
        <div id="footer">
            <div className="container ">
                <div className="row col-2-footer row-footer-1 pt-5">
                    <div className="col-lg-6 d-flex align-items-center justify-content-xs-center justify-content-lg-start">
                        <ul>
                            <li>
                                <a>خانه</a>
                            </li>
                        </ul>

                    </div>
                    <div className="col-lg-6 btn-footer ">
                        <div >
                           
                            <span>fbhrf</span>
                            <span>vgfngkyh,lhky</span>
                            <span>vgfngfmky,lhky</span>
                            <span>vgfnghky</span>
                            <span>vgfngfmlhky</span>
                               
                        </div>
                    </div>
                 
                </div>
                <div className="row col-2-footer py-3">
                    <div className="col-lg-6">
                        <i class="fa fa-map-marker px-1" aria-hidden="true"></i>
                        
                    تهران؛ میدان ولیعصر(عج)، بلوار کشاورز، خیابان عبدالله زاده، خیابان زیبا، پلاک 44، واحد 9                

                    </div>
                    <div className="col-lg-2">
                        <i class="fa fa-phone px-1" aria-hidden="true"></i>
                        
                    021-88783650                
                    </div>
                    <div className="col-lg-4">

                    </div>
                </div>
                <div class="row py-3">
                <div class="col-12 footer-copyright my-auto text-center text-lg-center aos-init aos-animate" data-aos="fade" data-aos-delay="600">
                    <p>
                        تمام حقوق این سایت، متعلق به <span>آکام</span> می باشد.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
