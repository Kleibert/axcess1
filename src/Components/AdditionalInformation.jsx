import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown,faAngleUp} from '@fortawesome/free-solid-svg-icons'
class AdditionalInformation extends Component {
    
    render() { 
       
        return (
        <div class="boxes">
           {this.props.addInfoShow?
           <div class="h-100 ">
            <div class="row">
             <div class="col-11 header-doc-style">
                    <ul class="nav nav-custom">
                        <li class="nav-item nav-item-active ">
                            <a class="nav-link" href="#" >
                                Document index
                            </a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#" >
                                Al Highlight
                            </a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#" >
                                Notes
                            </a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#" >
                                Consult
                            </a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#" >
                                Recommendations
                            </a>
                        </li>
                    </ul>
         </div>
         <div class="col-1 header-doc-style text-right">
            <div class="icon-style icon-add-info">
                    <FontAwesomeIcon icon={faAngleDown} onClick={this.props.onAddInfoShow}  />
            </div>
         </div>
         </div>
         <div class="row add-info h-100" >
                 <div class="col-12 h-100" >
                 <div class="align-items-bottom">  
                         <button> Save</button>
                         <button> Cancel</button>
                         <button> Timestamp</button>
                     </div> 
                </div>
            </div>
            </div>
            :
            <div class="row">
                 <div class="col-11 header-doc-style">
                    <ul class="nav nav-custom">
                        <li class="nav-item nav-item-active ">
                            <a class="nav-link" href="#" >
                                Document index
                            </a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#" >
                                Al Highlight
                            </a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#" >
                                Notes
                            </a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#" >
                                Consult
                            </a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#" >
                                Recommendations
                            </a>
                        </li>
                    </ul>
            </div>
                 <div class="col-1 header-doc-style text-right">
                         <div class="icon-style icon-add-info">
                            <FontAwesomeIcon icon={faAngleUp} onClick={this.props.onAddInfoShow} />
                         </div>
                    </div> 
            </div>
                }
     </div>
         );
    }
}
 
export default AdditionalInformation;