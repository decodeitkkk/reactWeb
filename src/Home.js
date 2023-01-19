import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common';
import img from "./images/growth_curve.svg";



export const Home = () => { 
  return (
    <>
    
    <Common tagline={"Grow your business with "}
      brand_name={"Brand Name"} 
      img={img}
      desc={'We are the team of talented developers making amazing websites.'}
      to_link={"/service"}
      btName={'Get Started'}
    />
  </>
  )
}
