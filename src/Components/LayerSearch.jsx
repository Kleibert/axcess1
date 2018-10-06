import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons';
class LayerSearch extends Component {
    constructor(props){
        super(props);
        this.state={
           
        }
      }
   
    render() { 
        console.log("teste vindo do pai", this.props.sitedata, this.props.showLayer)
        return ( 
         <div>
        <div class="row header-doc-style ">
        <div class="col-2 " >
        <div class="icon-style">
                         <FontAwesomeIcon icon={faAngleRight} onClick={(e)=>this.props.showLayer(e)} />
                         </div>
         </div>
        <div class="col-10 " >
            <p>Request Documents and pages </p>
           
         </div>
         </div>
         <div class="row  text-center">
         <div class="col-6 col-layer active-layer" >
         <a>Layer</a>
         </div>
         <div class="col-6 col-layer " >
         <a>Search</a>
         </div>
         </div>
         <div class="row">
         <div class={this.props.addInfoShow?"col-12 body-layer":"col-12 body-layer body-layer-custom"} >
         <input type="text" id="txtSearch" name="txtSearch" value="Search page text in request.."/>
         
         <label class="custom-input">Search all documents under the curent stack 
             <input type="checkbox" />
             <span class="checkmark"></span>
        </label>
        
         <p><u>Advanced</u></p>
         <div class="custom-btn">
         <button>Clear</button>
         <button> Previous</button>
         <button>Next</button>
         <button>Server</button>
         <button> Server All</button>
         <button>Highlight</button>
         <button>Highlight All</button>
         </div>
         </div>
         </div>
         <div class="row text-center">
         <div class="col-6 col-layer active-layer" >
         <a>Layer</a>
         </div>
         <div class="col-6 col-layer" >
         <a>Search</a>
         </div>
         </div>
         <div class="row ">
         <div class="col-12 body-layer" >
         </div>
         </div>
         </div>
        
     );
    }
}
 
export default LayerSearch;