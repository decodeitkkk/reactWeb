import React, { useState } from 'react';


export const About = () => {
  const [Hello, setHello] = useState('');
  const [state, setState] = useState({
    f_name : "",
    l_name : "",
    mob : "",
    msg : ""
  })

  const handler = (e) => {
    const {name,value} = e.target;
    setState({...state,[name]:value})
  }

  const Sbmit = (e) => {
    e.preventDefault();
    console.log(state);
    console.log(state.f_name);    

    
  }

  return(
    <>
    <div className='my-5 ' >
          <h1 className='text-center' >About</h1>
      </div>
      <div className='container-fluid mb-5' >
        <div className='row' > 
            <div className='col-10 mx-auto' >
                <div className='row gy-4 ' >
                <form onSubmit={Sbmit} type="post" >
                      <div>
                      <input
                      className='w-100 rounded p-2 m-2 border border-secondary'
                      type="text" 
                      name='f_name'
                      onChange={handler}
                      placeholder="enter your first name"
                      />
                      </div>
                    <div>
                    <input  
                    className='w-100 rounded p-2 m-2 border border-secondary'
                    type="text"
                    name='l_name'
                    onChange={handler}
                    placeholder="enter your last name"
                    />
                    <input  
                    className='w-100 rounded p-2 m-2 border border-secondary'
                    type="number"
                    name='mob'
                    onChange={handler}
                    placeholder="Enter your Mobile Number"
                    />
                    <textarea  
                    className='w-100 rounded p-2 m-2 border border-secondary'
                    type="textarea"
                    name='msg'
                    onChange={handler}
                    placeholder="Enter your Message "
                    />
                    </div>
                    <button className='btn btn-primary m-2' type="submit" >Submit</button>
                </form>
                  </div>
                </div>
            </div>
        </div>
    
    
    
  </>
  )
}
