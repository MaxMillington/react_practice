
import React, { Component } from 'react'

export default class Controlled extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '',
      // TODO define the state variables to hold the two input values
    }
  }

  submit = (e) => {
    e.preventDefault()
    const firstname = ''  // TODO get the value of the first name
    const lastname = ''   // TODO get the value of the last name
    this.setState({msg: `first name = ${firstname}, last name = ${lastname}`})
  }

  setFirstname = (e) => this.setState( {firstname: e.target.value} )

  setLastname = (e) => this.setState( {lastname: e.target.value} )

  render() {
    return (
      <div className="item">
        <p>Controlled</p>
        <form onSubmit={this.submit}>
          <label htmlFor="firstname">First:</label>
          <input
            type="text"
            id="firstname"
            // TODO add the 'value' and 'onChange' attributes
            />
          <br />
          <label htmlFor="lastname">Last:</label>
          <input
            type="text"
            id="lastname"
            // TODO add the 'value' and 'onChange' attributes
            />
          <br />
          <button>Submit</button>
        </form>
        <p>{this.state.msg}</p>
      </div>
    )
  }
}
