import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let r='React'
  let rn='React Native'
  const el=(
    <div>
      Create web & Mobile App 
      with <span dengerouslySetInnerHTML={{_html:r}}></span> & {rn}
      
    </div>
  )
  return el
}

export default App;
