import React, {Component} from 'react';

import './styles.css'

import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import Middle from './Middle'

export default class FullPage extends Component {
  constructor( props ) {
    super(props)
    this.state = {
      header: 'This is the Header',
      footer: 'This is the Footer',
      nav: 'Nav'
    }
  }
  render() {
    return (
      <div className="fullPageBox">
        <Header header={this.state.header}/>
        <div className="middle">
          <div className="leftHalf">
            <Nav nav={this.state.nav}/>
          </div>
          <div className="rightHalf">
            <Middle text="Hello, world."/>
          </div>
        </div>
        <Footer footer={this.state.footer}/>
      </div>
    );
  }
}
