import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import sample from "../static/sample.pdf";
class DocumentEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1
    };
  }
  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    console.log("pdf", sample);
    return (
      <div>
        {/* menu */}
        <div class="row">
          <div class="col-12 header-doc-style">
            <ul class="nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  PCO Server
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#">
                    link
                  </a>
                  <a class="dropdown-item" href="#">
                    link
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Al Highlight
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#">
                    link
                  </a>
                  <a class="dropdown-item" href="#">
                    link
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <div class="select-style select-style-docEditor ">
                  <select>
                    <option selected>Full Page</option>
                    <option value="1">75%</option>
                    <option value="2">90%</option>
                    <option value="3">150%</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/*End menu*/}
        {/*show pdf Document*/}
        <div class="row">
               {/* conditio to display pdf element when Zone 2 our 3 is closed our open */}
          <div
            class={
              this.props.addInfoShow
                ? "col-12 body-doc-style"
                : "col-12 body-doc-style-custom"
            }
          >
            <div class="show-pdf">
              <Document
                file={sample}
                onLoadSuccess={this.onDocumentLoad}
                error="An error occurred!"
              >
                <Page pageNumber={this.props.numberPage} scale="0.6" />
              </Document>
            </div>
          </div>
        </div>
        {/*show pdf Document*/}
      </div>
    );
  }
}
export default DocumentEditor;
