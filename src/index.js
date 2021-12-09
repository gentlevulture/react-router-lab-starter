import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/Home'
import Contact from './components/Contact'
import Procedures from './components/Procedures';
import About from './components/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<App /> }>
      <Route path='/' element ={<Home />} />
      <Route path='Procedures' element ={<Procedures />} />
      <Route path='About' element ={<About />} />
      <Route path='Contact' element={<Contact />} />
    </Route>

    </Routes>
  
  </BrowserRouter>,
  document.getElementById('root')
)