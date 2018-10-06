import React, {Component} from 'react';
import PageList from './PageList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons'
import DocumentEditor from './DocumentEditor';
import Layer from './LayerSearch';
import AddInformation from './AdditionalInformation';
import './style.css';

class DocumentList
 extends Component {
     constructor(props)
     {
         super(props);

    this.state = { 
        rows:[
            {name:'AD00012', dicolesure:'Not Reviewd',pages:'102',stack:'Expense Documents'},
            {name:'AD00012', dicolesure:'Not Reviewd',pages:'102',stack:'Expense Documents'},
            {name:'AD00012', dicolesure:'Not Reviewd',pages:'102',stack:'Expense Documents'},
            {name:'AD00012', dicolesure:'Not Reviewd',pages:'102',stack:'Expense Documents'},
            {name:'AD00012', dicolesure:'Not Reviewd',pages:'102',stack:'Expense Documents'},
            {name:'AD00012', dicolesure:'Not Reviewd',pages:'102',stack:'Expense Documents'},
            {name:'AD00012', dicolesure:'Not Reviewd',pages:'102',stack:'Expense Documents'},
            {name:'AD00012', dicolesure:'Not Reviewd',pages:'102',stack:'Expense Documents'},
            {name:'AD00012', dicolesure:'Not Reviewd',pages:'102',stack:'Expense Documents'},
            {name:'AD00012', dicolesure:'Not Reviewd',pages:'102',stack:'Expense Documents'},
          
        ],

        pages:[
            {pagination: '000006', dicolesure:'Partial',article:'10.13'},
            {pagination: '000007', dicolesure:'Partial',article:'10'},
            {pagination: '000006', dicolesure:'Partial',article:'1'},
            {pagination: '000006', dicolesure:'Partial',article:'10.13'},
            {pagination: '000006', dicolesure:'Partial',article:'10.13'},
            {pagination: '000006', dicolesure:'Partial',article:'10.13'},
            {pagination: '000006', dicolesure:'Partial',article:'10.13'},
            {pagination: '000006', dicolesure:'Partial',article:'10.13'},
            {pagination: '000006', dicolesure:'Partial',article:'10.13'},
            {pagination: '000006', dicolesure:'Partial',article:'10.13'},
            {pagination: '000006', dicolesure:'Partial',article:'10.13'},
            {pagination: '000006', dicolesure:'Partial',article:'10.13'},
            {pagination: '000006', dicolesure:'Partial',article:'10.13'},
            {pagination: '000006', dicolesure:'Partial',article:'10.13'},
            {pagination: '000006', dicolesure:'Partial',article:'10.13'},
            {pagination: '000006', dicolesure:'Partial',article:'10.13'},
            {pagination: '000006', dicolesure:'Partial',article:'10.13'},
            {pagination: '000006', dicolesure:'Partial',article:'10.13'},
            {pagination: '000006', dicolesure:'Partial',article:'10.13'},

        ],
        counter:[{pagination: '000006', dicolesure:'Partial',article:'10.13'},
            {pagination: '000006', dicolesure:'Partial',article:'10.13'},
        ],
        show:false,
        showLayerSearch:true,
        showAddInfo:true,
            
     }
     this.handlShowLayer =this.handlShowLayer.bind(this);
     this.handlShow=this.handlShow.bind(this);
     this.handlAddInfo=this.handlAddInfo.bind(this);
    }

     handlShow(){       
        
        this.setState({
            show:!this.state.show
            
        })
    
     }
     handlShowLayer(e)
     {e.preventDefault();
        
            this.setState({
                showLayerSearch:!this.state.showLayerSearch
                
            }) 
    }

    handlAddInfo(){
        this.setState({
            showAddInfo:!this.state.showAddInfo
            
        }) 
    }
    render() { 
        console.log("taminha da tela",document.documentElement.clientHeight)
        return (
         <div class="container-fluid">
         <div class="box-flex" >
        {/*====contional to show Zone2 and Zone3====*/}            
         {this.state.show?
             <div class="panel-btn-show box" > 
                    <div class="header-doc-style">
                    <div class="icon-style">
                    <FontAwesomeIcon icon={faAngleRight} onClick={this.handlShow} />
                    </div>
                </div>
        </div>:
        <div class="box box1">
                    <div class="row header-doc-style">
                        <div class="col-10" >
                             <p>Request Documents and pages</p>
                        </div>
                        <div class="col-2" >
                            <div class="icon-style">
                            <FontAwesomeIcon icon={faAngleLeft} onClick={this.handlShow} />
                            </div>
                        </div>
                    </div>
                    <div class="row row-style">
                        <div class="col-5">
                            <div class="aling-text"></div>
                              <p>Document List</p>
                            </div>
                         <div class="col-7">
                            <div class="select-style ">
                                <select>
                                    <option selected>Document Exemple </option>
                                    <option  value="1">One</option>
                                    <option value="2">Two</option>
                                     <option value="3">Three</option>
                                </select>
                            </div>
                         </div>
                    </div>
                    <div class="row row-table" >
                        <div clas ="col-6">
                            
                                        <table class="table table-borderless fixed_header table-doc"> 
                                        <thead>
                                        <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Disclosure</th>
                                        <th scope="col">#Pages</th>
                                        <th scope="col">Stack</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {/*mapping the document list*/}
                                            {this.state.rows.map(row => 
                                                    <tr>
                                                        <td>{row.name}</td>
                                                        <td>{row.dicolesure}</td>
                                                        <td>{row.pages}</td>
                                                        <td>{row.stack}</td>
                                                    </tr>
                                                        )}
                                        </tbody>
                                        </table>
                                        </div>
                                        </div>
                            {/*===Call the component to show Zone 3 Page liste===*/}
                         <PageList pagelist={this.state.pages} counter={this.state.counter}/>
         </div> }
          {/*====End contional to show Zone2 and Zone3====*/}  
            <div class="box box2">
            
                   <div class="boxes">
                                   <div class="boxes-row"> 
                                   <div class="box-flex">

                                                <div class={this.state.showLayerSearch?"box-flex-1":"box-flex-layer-closed"}>
                                <DocumentEditor showItems={this.state.show} addInfoShow={this.state.showAddInfo} />
                                                 </div>
                                                 {this.state.showLayerSearch?
                                                 <div class="box-flex-2">
                                <Layer showLayer={this.handlShowLayer}  addInfoShow={this.state.showAddInfo}  sitedata={this.state.class}/>
                                                </div>: 
                                               <div class="box-flex-icon">
                                               <div class="header-doc-style">
                                                <div class="icon-style">
                                                 <FontAwesomeIcon icon={faAngleLeft} onClick={this.handlShowLayer} />
                                                 </div>
                                              </div>
                                              </div>}
                                     
                                </div>           
                                </div> 
                                <div class={this.state.showAddInfo?"boxes-row warp-add ":"boxes-row"}> 
                                     <div class="boxes">
                                        <AddInformation  onAddInfoShow={this.handlAddInfo} addInfoShow={this.state.showAddInfo}/>
                                    </div>
                                 </div>
                    </div>
             
            </div>
                                                
            </div></div>
          );
    }
}
 
export default DocumentList
;