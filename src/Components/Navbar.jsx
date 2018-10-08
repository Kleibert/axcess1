import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-custom">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown active">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                File
              </a>
              <div
                class="dropdown-menu "
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item " href="#">
                  Open file
                </a>
                <a class="dropdown-item" href="#">
                  Close file
                </a>
                <a class="dropdown-item" href="#">
                  Save file
                </a>
                <a class="dropdown-item" href="#">
                  Create transparente PDF file
                </a>
                <a class="dropdown-item" href="#">
                  Print
                </a>
                <a class="dropdown-item" href="#">
                  Print Preview
                </a>
                <a class="dropdown-item" href="#">
                  Print Setup
                </a>
                <a class="dropdown-item" href="#">
                  Exit
                </a>
              </div>
            </li>
            <li class="nav-item dropdown active">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Action
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  Deleted rectangle color
                </a>
                <a class="dropdown-item" href="#">
                  Clause with reach rectangle
                </a>
                <a class="dropdown-item" href="#">
                  Draw multiple rectangle at once
                </a>
                <a class="dropdown-item" href="#">
                  Justify the x rectangles just drawn
                </a>
                <a class="dropdown-item" href="#">
                  Enable auto-completion for registration
                </a>
              </div>
            </li>
            <li class="border-line" />
            <li class="nav-item dropdown active ">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Document
              </a>
            </li>
            <li class="nav-item dropdown active">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Page
              </a>
            </li>
            <li class="border-line" />
            <li class="nav-item dropdown active">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Admin
              </a>
            </li>
            <li class="nav-item dropdown active">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Help
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
