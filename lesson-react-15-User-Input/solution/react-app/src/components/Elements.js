
import React, { Component } from 'react'

export default class Elements extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      gender: '',
      ready: false
    }
  }

  displayState = () => {
    return  JSON.stringify(this.state)
      .replace(/[{}"]/g, '')
      .replace(/:/g, ' : ')
      .split(',')
      .map( (item, idx) => <div key={idx}>{item}</div>)
  }

  submit = (e) => {
    e.preventDefault()
    let gender = e.target.elements[0].checked ? 'male'
        : e.target.elements[1] && 'female'
    this.setState({gender: gender})
    this.setState({ready: e.target.elements[2].checked})
    this.setState({firstname: e.target.elements[3].value})
    this.setState({lastname: e.target.elements[4].value})
  }

  render() {
    return (
      <div className="item">
        <p>Elements</p>
        <form onSubmit={this.submit}>
          <label htmlFor="male">Male:</label>
          <input type="radio" id="male" name="gender" value="male" />

          <label htmlFor="female">Female:</label>
          <input type="radio" id="female" name="gender" value="female" />
          <br />

          <label htmlFor="ready">Ready?</label>
          <input type="checkbox" id="ready" />
          <br />

          <label htmlFor="firstname">First:</label>
          <input type="text" id="firstname" />
          <br />
          <label htmlFor="lastname">Last:</label>
          <input type="text" id="lastname" />
          <br />
          <button>Submit</button>
        </form>
        <div style={{textAlign: 'left'}}>{this.displayState()}</div>
      </div>
    )
  }
}
