
import React, { Component } from 'react'

export default class Uncontrolled extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '',
      // TODO define a state variable for each 'ref' variable
    }
  }

  submit = (e) => {
    e.preventDefault()
    const firstname = ''  // TODO get the value from the instance variable
    const lastname = ''   // TODO get the value from the instance variabel
    this.setState({msg: `first name = ${firstname}, last name = ${lastname}`})
  }

  render() {
    return (
      <div className="item">
        <p>Uncontrolled</p>
        <form onSubmit={this.submit}>
          <label htmlFor="firstname">First:</label>
          <input
            type="text"
            id="firstname"
            // TODO add the 'ref' attribute, save the input to an instance variable
            />
          <br />
          <label htmlFor="lastname">Last:</label>
          <input
            type="text"
            id="lastname"
            // TODO add the 'ref' attribute, save the input to an instance variable
            />
          <br />
          <button>Submit</button>
        </form>
        <p>{this.state.msg}</p>
      </div>
    )
  }
}
