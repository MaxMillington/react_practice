
import React, { Component } from 'react'

import UserInfo from './UserInfo'

export default class Marketing extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Unknown Name'
    }
  }
  componentDidMount() {
    UserInfo.registerListener(this.changeName)
  }

  changeName = (name) => {
    console.log('yo', name)
    this.setState({name})
  }

  render() {
    return (
      <div>Hello, {this.state.name}, buy more stuff!!</div>
    )
  }
}
