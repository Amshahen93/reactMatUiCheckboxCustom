import React from 'react';
import './App.css';
import Checkbox from './Checkbox/Checkbox.js'

function App() {
  const checkboxStyle = {
    borderColor: 'rgb(165, 165, 165)', 
    backgroundColor: 'white', 
    activeBackgroundColor: 'blue', 
    fontColor: 'white', 
    shadowColor: 'green', 
    width: '18px', 
    height: '18px' 
  };
  const check = (e)=> {
    console.log(e)
  } 
  return (
    <Checkbox style = {checkboxStyle} index = {1} name = {'ceckbox'} isChecked = {true} clickHandler = {check}/>
  );
}

export default App;
