import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';
import React from 'react';

const App = () =>
  {
    <React.Fragment>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </React.Fragment>
  }


export default App
