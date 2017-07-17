import React, {Component} from 'react'

export default class Middle extends Component {
  render() {
    return (
      <div className="middle">{this.props.text}</div>
    )
  }
}
