
import React, { Component } from 'react'

import UserInfo from './UserInfo'

export default class Marketing extends Component {

  render() {
    return (
      <div>Hello, {this.props.name}, buy more stuff!!</div>
    )
  }
}
