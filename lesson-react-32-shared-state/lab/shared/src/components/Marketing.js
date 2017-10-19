
import React, { Component } from 'react'

export default class Marketing extends Component {
  constructor( props ) {
    super(props)
    this.state = {
      name: 'Unknown power user'
    }
  }

  itChanged = ( name ) => this.setState({ name })

  render() {
    return (
      <div>Hello, {this.props.name}, buy more stuff!!</div>
    )
  }
}
