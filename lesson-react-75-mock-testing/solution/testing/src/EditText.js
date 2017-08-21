
import React, { Component } from 'react'

export default class EditText extends Component {
  constructor( props ) {
    super(props)
    this.state = {
      text: ''
    }
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.endEdit( this.state.text )
    this.setState({text: ''})
  }
  onChange = (e) => {
    this.setState({text: e.target.value })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="editText">Input Text: </label>
          <input
            type="text"
            onChange={ this.onChange }
            value={this.state.text}
            id="editText" />
        </form>
      </div>
    )
  }
}
