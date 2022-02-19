/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import cronometro from './assets/cronometro.png'; 
import './style.css'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className="container">
        <img className="img" src={cronometro} alt="Cronometro" />
        <a className="timer">0:0</a>
        <div className="areaBtn">
          <a className="botao">VAI</a>
          <a className="botao">LIMPAR</a>
        </div>
      </div>
    );
  }
  
}

export default App;
