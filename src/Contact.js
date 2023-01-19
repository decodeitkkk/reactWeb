import React from 'react';
import Common from './Common';
import contactImg from "./images/contact.svg";


export const Contact = () => {
  return (
    <>
      <Common tagline={"Welcome to About Page"}
        brand_name={"Brand Name"} 
        img={contactImg}
        desc={'We are the team of talented developers making amazing websites.'}
        to_link={"/about"}
        btName={'Contact Us'}
      />
    </>
  )
}
