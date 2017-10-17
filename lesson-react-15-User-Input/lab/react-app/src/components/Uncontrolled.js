
import React, { Component } from 'react'

export default class Uncontrolled extends Component {
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
    // TODO set the state variables from the input reference variables
  }

  render() {
    return (
      <div className="item">
        <p>Uncontrolled</p>
        <form onSubmit={this.submit}>
          <label>Male:</label>
          <input type="radio" name="gender" value="male"
            // TODO add the 'ref' attribute
            />

          <label>Female:</label>
          <input type="radio" name="gender" value="female"
            // TODO add the 'ref' attribute
            />
          <br />

          <label>Ready?</label>
          <input type="checkbox"
            // TODO add the 'ref' attribute
            />
          <br />

          <label>First:</label>
          <input type="text"
            // TODO add the 'ref' attribute
            />
          <br />

          <label>Last:</label>
          <input type="text"
            // TODO add the 'ref' attribute
            />
          <br />

          <button>Submit</button>
        </form>
        <div style={{textAlign: 'left'}}>{this.displayState()}</div>
      </div>
    )
  }
}
