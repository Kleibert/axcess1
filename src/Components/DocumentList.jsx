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
        show:true,
        showLayerSearch:true
            
     }
     this.handlShowLayer =this.handlShowLayer.bind(this);
     this.handlShow=this.handlShow.bind(this)
    }

     handlShow(){       
        if(this.state.show===true){
        
        this.setState({
            show:false,
            
        })
    }else{
        this.setState({
            show:true,
            
        })
    }
     }
     handlShowLayer(e)
     {e.preventDefault();
        
            this.setState({
                showLayerSearch:!this.state.showLayerSearch
                
            }) 
    }
    render() { 
        console.log("taminha da tela",document.documentElement.clientHeight)
        return (
         <div class="container-fluid">
         <div class="row h-100" >
            <div class={!this.state.show?"panel-btn-show":"close-panel"} >
            
            <div class="header-doc-style">
           
                        <div class="icon-style">
                         <FontAwesomeIcon icon={faAngleRight} onClick={this.handlShow} />
                         </div>
                      </div>
             
             </div>
        <div class={this.state.show?"col-3":"close-panel"}>
                    <div class="row header-doc-style">
                        <div class="col-10" >
                        
                            <p>Request Documents and pages</p>
                        </div>
                        <div class="col-2 " >
                            <div class="icon-style">
                            <FontAwesomeIcon icon={faAngleLeft} onClick={this.handlShow} />
                            </div>
                        </div>
                    </div>
                
            
                
                            <div class="row row-style">
                                <div class="col-4">
                                    <div class="aling-text"></div>
                                        <p>Document List</p>
                                    </div>
                                
                                <div class="col-8">
                                    <div class="select-style ">
                                        <select>
                                            <option selected>Choose... </option>
                                            <option  value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row row-table" >
                            <div clas ="col-6">
                            <div >
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
                            </div>
                            <PageList pagelist={this.state.pages} counter={this.state.counter}/>
         </div> 
            <div class={!this.state.show?"panel-doc-show":"col-9"}>
                    <div class="row" >
                        <div class={!this.state.show?"col-9":"col-8"}>
                        <DocumentEditor showItems={this.state.show} />
                        </div>
                        <div class={this.state.show?"col-4":"col-3"}>
                        <Layer showLayer={this.handlShowLayer} sitedata={this.state.class}/>
                        </div>
                    </div>
                    <div class="warp-add ">
                    <div class="row h-100">
                    <div class="col-12">
                    <AddInformation />
                    </div>
                    </div>
                    </div>
            </div>
            </div>
            
            </div>
          );
    }
}
 
export default DocumentList
;