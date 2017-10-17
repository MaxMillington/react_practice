
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
    // TODO extract the values from the e.target.elements[] array
    // TODO update the state variables
  }

  render() {
    return (
      <div className="item">
        <p>Elements</p>
        <form onSubmit={this.submit}>
          <label>Male:</label>
          <input type="radio" name="gender" value="male" />

          <label>Female:</label>
          <input type="radio" name="gender" value="female" />
          <br />

          <label>Ready?</label>
          <input type="checkbox" />
          <br />

          <label>First:</label>
          <input type="text" />
          <br />

          <label>Last:</label>
          <input type="text" />
          <br />
          <button>Submit</button>
        </form>
        <div style={{textAlign: 'left'}}>{this.displayState()}</div>
      </div>
    )
  }
}
