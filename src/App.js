import React from 'react';
import logo from './logo.svg';
// import './App.css';
// import './style.css';
import { Header } from './func-components';
import { Content } from './func-components';
import { Footer } from './func-components';
import Calender from './class-components';

function App() {
  return (
    <>
    <Header/>
    <p><center><Calender/></center></p>
    <Content/>
    <Footer/>
  </> 

  )
}


export default App;
