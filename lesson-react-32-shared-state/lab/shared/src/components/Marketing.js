
import React, { Component } from 'react'

import UserInfo from './UserInfo'

export default class Marketing extends Component {
  constructor( props ) {
    super(props)
    this.state = {
      name: 'Unknown power user'
    }
  }

  componentDidMount() {
    UserInfo.registerListener( this.itChanged )
  }

  itChanged = ( name ) => this.setState({ name })

  render() {
    return (
      <div>Hello, {this.state.name}, buy more stuff!!</div>
    )
  }
}
