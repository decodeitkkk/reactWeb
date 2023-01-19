import React from 'react';
import { NavLink } from 'react-router-dom';
import img from "./images/growth_curve.svg";
import index from "./index.css"



export const Common = (props) => { 
  return (
    <>
      <section className='d-flex align-items-center mt-5 pt-5' >
        <div className='container-fluid nav_bg' >
            <div className='row' >
                <div className='col-10 mx-auto ' >
                  <div className='row' >
                    <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 my-lg-5 py-lg-5 d-flex justify-content-center flex-column' >
                        <h1> {props.tagline} <strong className='brand-name' > {props.brand_name} </strong> </h1>
                        <h3 className='my-3' > {props.desc} </h3>
                        <div className='mt-3' > <NavLink to={props.to_link} className='btn-get-started rounded-pill border-info ' > {props.btName} </NavLink> </div>
                    </div>

                    <div className='col-lg-6 order-1 order-lg-2 header-img' >
                      <img src={props.img} className="img-fluid animated" alt="home_img" />
                    </div>
                  </div>
                </div>  
            </div>
        </div>
      </section>
    </>
  )
}

export default Common;