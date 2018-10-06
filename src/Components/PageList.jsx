import React, { Component } from 'react';

class  PageList extends Component  {
    constructor(props){
        super(props);
        this.state={
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
    
            ],
        }
      }
   
    render() { console.log(this.props.pagelist)
        return ( <div>
            <div class="row  row-page-list align-items-center">
                         <div class="col">
                            
                                <p>Page List </p>
                             
                                </div>
                            
            </div>
            <div class="row row-table-page-list" >
                    
                    <div class="table-responsive" >
                                <table class="table table-borderless fixed_header table-pag-list">
                                <thead>
                                <tr>
                                <th scope="col">Page </th>
                                <th scope="col">Pagination</th>
                                <th scope="col">Disclosure</th>
                                <th scope="col">Article</th>
                                </tr>
                                </thead>
                                <tbody >
                                    {/*mapping the document list*/}
                                    
                                    {this.props.pagelist.map((row,i) => 
                                            <tr>
                                                <td>{i+1}</td>
                                                <td>{row.pagination}</td>
                                                <td>{row.dicolesure}</td>
                                                <td>{row.article}</td>
                                            </tr>
                                                )}
                                </tbody>
                                </table>
                                </div>
                     </div>
                     </div>
         );
    }
}
 
export default PageList ;