import React, { Component } from "react";
import { Table } from "react-bootstrap";/*option to use bootstrap with react */
class PageList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    
    return (
      <div>{/*render Zone 3*/}
        <div class="row  row-page-list ">
          <div class="col-12  ">
            <div class="row ">
              <p>Page List </p>
            </div>
          </div>
        </div>
        {/*table in Zone 5*/}
        <div class="row row-table-page-list">
          <Table
            responsive
            hover
            className="table-borderless fixed_header table-pag-list"
          >
            <thead>
              <tr>
                <th scope="col">Page </th>
                <th scope="col">Pagination</th>
                <th scope="col">Disclosure</th>
                <th scope="col">Article</th>
              </tr>
            </thead>
            <tbody>
              {/*mapping the document list from Document list Zone 2*/}

              {this.props.pagelist.map((row, i) => (
                <tr
                  onClick={() => this.props.onSelected(row.pagination)}
                  className={row.class}
                  value={i}
                >
                  <td>{row.page}</td>
                  <td>{row.pagination}</td>
                  <td>{row.dicolesure}</td>
                  <td>{row.article}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default PageList;
