import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
class  PageList extends Component  {
    constructor(props){
        super(props);
        this.state={
        }
      }
    
    
    render() { console.log(this.props.pagelist)
        return ( <div>
            <div class="row  row-page-list ">
                         <div class="col-12  ">
                            <div class="row ">
                                <p>Page List </p>
                                </div>
                             </div>
            </div>
            <div class="row row-table-page-list" >
                    
                    <div class="table-responsive" >
                    <Table responsive className="table-borderless fixed_header table-pag-list">
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
                                             <tr onClick={()=>this.props.onSelected(row.pagination)} className={row.class} value={i}>
                                                <td>{row.page}</td>
                                                <td>{row.pagination}</td>
                                                <td>{row.dicolesure}</td>
                                                <td>{row.article}</td>
                                            </tr>
                                                )}
                                </tbody>
                                </Table>
                                </div>
                     </div>
                     </div>
         );
    }
}
 
export default PageList ;