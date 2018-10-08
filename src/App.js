import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import DocumentList from './Components/DocumentList';

import './App.css';

class App extends Component {
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
