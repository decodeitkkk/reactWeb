import React from 'react';
import sdata from "./apidata";
import Card from './Card';


export const Service = () => {
  return (
    <>
      <div className='my-5 ' >
          <h1 className='text-center' >Services</h1>
      </div>
      <div className='container-fluid mb-5' >
        <div className='row' > 
            <div className='col-10 mx-auto' >
                <div className='row gy-4 ' >
                    {
                      sdata.map((arr,id)=>{
                        return <Card img={ arr.img } title={ arr.name } /> 
                      })
                    }
                    
                  </div>
                </div> 
            </div>
        </div>      
    </>
  )
}
