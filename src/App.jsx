import React from 'react';
import Navber from './MainComponant/Navber';
// import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './MainComponant/Home';
import About from './MainComponant/About';
import Skills from './MainComponant/Skills';
import Projects from './MainComponant/Projects';
import Experiences from './MainComponant/Experiences';
import Services from './MainComponant/Services';
import Contact from './MainComponant/Contact';
import Footer from '../src/MainComponant/Footer';

const App = () => {
  return (
    <div>
      
      {/* <BrowserRouter> */}
      <Navber></Navber>
      <Home/>
        {/* <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Skills' element={<Skills/>}></Route>
          <Route path='/Projects' element={<Projects/>}></Route>
          <Route path='/Services' element={<Services/>}></Route>
          <Route path='/Experience' element={<Experiences/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        </Routes> */}
        <Footer/>
      {/* </BrowserRouter> */}
    </div>
  )
}

export default App
