
import React, { Component } from 'react'


export default class Login extends Component {

  _input = ''

  handleInput = ( input ) => {
    this._input = input
  }

  submit = ( event ) => {
      event.preventDefault();
      var content = this._input.value;
      this.props.setName( content )
      this._input.value = '';
  }
  render() {
    return (
      <div>
        <div>User name is {this.props.name}</div>
        <form onSubmit={this.submit}>
          <input
            type="text"
            ref={this.handleInput}
             />
        </form>
      </div>
    )
  }
}
