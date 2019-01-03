import React, {Component} from 'react';
import logo from './accounting.png';

export default class Header extends Component {
  render(){
    return (
      <header id="header">
        <nav class="navbar navbar-inverse navbar-fixed-top" id="nav-bar">
          <div class="container-fluid">

          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">
              <img src={logo} id="header-img"/>
            </a>
          </div>

          </div>
        </nav>
      </header>
    );
  }
}
