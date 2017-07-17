import React, {Component} from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h1>{this.props.footer}</h1>
      </div>
    )
  }
}
