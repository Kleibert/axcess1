import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import DocumentList from './Components/DocumentList';

import './App.css';

class App extends Component {
state ={
  h :''
}
  componentDidMount(){
    window.addEventListener("load", (e)=>this.handlOnload())
  this.size();
  }
size=() =>{

  window.addEventListener("resize",(e)=>{this.setState({
    h:document.documentElement.clientHeight - 58 })});
}
handlOnload=()=>{
  this.setState({
    h:document.documentElement.clientHeight - 58 })
}
  render() {
   
    
    return (
      <div className="App">
       {/*Call top Menu Editor Zone1*/}
          <Navbar />
        <div class="container-fluid">
          <div class="row">
          {/*Call app from Document list*/}
          <DocumentList/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
