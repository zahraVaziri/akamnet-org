import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
        <div>
            <div className="container py-5 ">
                <div className="row row-loading">
                    <div className="col-12">
                        <div class="loader"></div>
                        <h2  style={{color:'#000'}}>شکیبا باشید</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
