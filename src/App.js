import React from 'react';
import { BrowserRouter,  Route, Routes  } from 'react-router-dom';
import {Contact} from "./Contact";
import {Navbar} from "./Navbar";
import {Service} from "./Service";
import {Home} from "./Home";
import { User } from './User';
import { About } from './About';
import { Footer } from './Footer';







export const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={ <Home /> }  />
          <Route path='contact' element={ <Contact /> } />
          <Route path='service' element={ <Service /> } />
          <Route path='about' element={ <About /> } />
          <Route path="*" element={ <Home /> } />
          {/* <Redirect to='/' /> */}
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
  </>
  )
};

export default App;
