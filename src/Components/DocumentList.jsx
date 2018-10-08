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
        /*set arrays to show markup */
        docs:[
            {id:1,name:'AD00012', dicolesure:'Not Reviewd',pages:'102',stack:'Expense Documents',class:'selected'},
            {id:2,name:'AD00012', dicolesure:'Not Reviewd',pages:'102',stack:'Expense Documents',class:''},
            {id:3,name:'AD00012', dicolesure:'Not Reviewd',pages:'102',stack:'Expense Documents',class:''},
            {id:4,name:'AD00012', dicolesure:'Not Reviewd',pages:'102',stack:'Expense Documents',class:''},
            {id:5,name:'AD00012', dicolesure:'Not Reviewd',pages:'102',stack:'Expense Documents',class:''},
            {id:6,name:'AD00012', dicolesure:'Not Reviewd',pages:'102',stack:'Expense Documents',class:''},
            {id:7,name:'AD00012', dicolesure:'Not Reviewd',pages:'102',stack:'Expense Documents',class:''},
            {id:8,name:'AD00012', dicolesure:'Not Reviewd',pages:'102',stack:'Expense Documents',class:''},
            {id:9,name:'AD00012', dicolesure:'Not Reviewd',pages:'102',stack:'Expense Documents',class:''},
            {id:10,name:'AD00012', dicolesure:'Not Reviewd',pages:'102',stack:'Expense Documents',class:''},
          
        ],

        pages:[
                {page:1,pagination: '000006', dicolesure:'Partial',article:'10.13', class:'selected'},
                {page:2,pagination: '000007', dicolesure:'Partial',article:'10', class:''},
                {page:3,pagination: '000008', dicolesure:'Partial',article:'1',class:''},
                {page:4,pagination: '000009', dicolesure:'Partial',article:'10.13',class:''},
        ],
      
        show:false,
        showLayerSearch:true,
        showAddInfo:true,
        numberPage:1
     }
     /*Bind the functions */
     this.handlShowLayer =this.handlShowLayer.bind(this);
     this.handlShow=this.handlShow.bind(this);
     this.handlAddInfo=this.handlAddInfo.bind(this);
    }
    /*funtion to change the state of sidebar left zone2 and zone3  */
     handlShow(){       
        
        this.setState({
            show:!this.state.show
            
        })
    
     }
      /*funtion to change the state of sidebar right Zone5*/
     handlShowLayer(e)
     {e.preventDefault();
        
            this.setState({
                showLayerSearch:!this.state.showLayerSearch
                
            }) 
    }
  /*funtion to change the state of component Additional information Zone6 */
    handlAddInfo(){
        this.setState({
            showAddInfo:!this.state.showAddInfo
            
        }) 
    }
    /* Function to set a selected row document list Zone2 */
    onSelectedDoc = (data) =>{
       
        let docs = this.state.docs;
        //Find index of row selected using findIndex method
        const index = docs.findIndex(function(element,index){
            return element.id===data
        });
        console.log("index",index);
      
      //Find index of specific object using findIndex method.    
        const objIndex = docs.findIndex(function(element,index){
        return element.class==="selected"});

        //Log object to Console.
        console.log("Before update: ", docs[objIndex]);

        //Clear class property.
        docs[objIndex].class = "";

        console.log("After update: ", docs[objIndex]);
        //set class of row selected
         console.log(docs[index]);
                 docs[index].class='selected';
                
                 this.setState({
                     docs:docs
                 })
                  
                  
                    
            }
    /* Function to set a selected style on row page list Zone2 */
    handlSlected = (data) =>{
     
        let page = this.state.pages;
        //Finde index of row selected using findIndex method
        const index = page.findIndex(function(element,index){
            return element.pagination===data
        });
        console.log("index",index);
      
      //Find index of specific object using findIndex method.    
        const objIndex = page.findIndex(function(element,index){
        return element.class==="selected"});

        //Log object to Console.
        console.log("Before update: ", page[objIndex]);

        //Clear class property.
        page[objIndex].class = "";

        console.log("After update: ", page[objIndex]);
        //set class of row selected
         console.log(page[index]);
                 page[index].class='selected';
                
                 this.setState({
                     pages:page,
                     numberPage:page[index].page
                 })   
            }
    render() { 
        
        return (
         <div class="container-fluid">
         <div class="box-flex" >
        {/*====condition to show Zone2 and Zone3====*/}            
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
                                    <option selected>Document Example </option>
                                    <option  value="1">One</option>
                                    <option value="2">Two</option>
                                     <option value="3">Three</option>
                                </select>
                            </div>
                         </div>
                    </div>
                    <div class="row row-table" >
                        <div clas ="col-6">
                             {/*Table to show the document list array*/}
                                        <table class="table table-borderless table-hover fixed_header table-doc"> 
                                        <thead>
                                        <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Disclosure</th>
                                        <th scope="col">#Pages</th>
                                        <th scope="col">Stack</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {/*mapping the document list array*/}
                                            {this.state.docs.map(row => 
                                                    <tr onClick={()=>this.onSelectedDoc(row.id)}className={row.class}>
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
                         <PageList pagelist={this.state.pages} onSelected={this.handlSlected} />
         </div> }
          {/*====End contional to show Zone2 and Zone3====*/}  
            <div class="box box2">
            
                    <div class="boxes">
                                   <div class="boxes-row"> 
                                   <div class="box-flex">
                                                  {/*Condition to render zone 4 and zone 5*/}
                                                <div class={this.state.showLayerSearch?"box-flex-1":"box-flex-layer-closed"}>
                                                {/*Call componet Document Editor Zone4 to render*/}
                                                    <DocumentEditor showItems={this.state.show} 
                                                    addInfoShow={this.state.showAddInfo} 
                                                    numberPage={this.state.numberPage} />
                                                 </div>
                                                   {/*Call componet Layer/Search Editor Zone5 to render*/}
                                                 {this.state.showLayerSearch?
                                                 <div class="box-flex-2">
                                                    <Layer showLayer={this.handlShowLayer}  
                                                    addInfoShow={this.state.showAddInfo}  
                                                    sitedata={this.state.class}/>
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
                                      {/*Call Additional information zone 6 to render*/}
                                     <div class="boxes">
                                        <AddInformation  onAddInfoShow={this.handlAddInfo}
                                         addInfoShow={this.state.showAddInfo}/>
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