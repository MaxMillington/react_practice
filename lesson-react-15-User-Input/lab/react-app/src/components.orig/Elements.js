
import React, { Component } from 'react'

export default class Elements extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: ''
    }
  }

  submit = (e) => {
    e.preventDefault()
    // TODO get the values of the two elements
    const firstname = '' // TODO get the value of the first input
    const lastname = ''  // TODO get the vlue of the second input
    this.setState({msg: `first name = ${firstname}, last name = ${lastname}`})
  }

  render() {
    return (
      <div className="item">
        <p>Elements</p>
        <form onSubmit={this.submit}>
          <label htmlFor="firstname">First:</label>
          <input type="text" id="firstname" />
          <br />
          <label htmlFor="lastname">Last:</label>
          <input type="text" id="lastname" />
          <br />
          <button>Submit</button>
        </form>
        <p>{this.state.msg}</p>
      </div>
    )
  }
}
