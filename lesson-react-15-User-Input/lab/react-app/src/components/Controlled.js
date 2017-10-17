
import React, { Component } from 'react'

export default class Controlled extends Component {
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
  }

  render() {
    return (
      <div className="item">
        <p>Controlled</p>
        <form onSubmit={this.submit}>
          <label>Male:</label>
          <input type="radio" name="gender" value="male"
            // TODO add the onClick and checked attributes
            />

          <label>Female:</label>
          <input type="radio" name="gender" value="female"
            // TODO add the onClick and checked attributes
            />
          <br />

          <label>Ready?</label>
          <input type="checkbox"
            // TODO add the value and onClick attributes
            />
          <br />

          <label>First:</label>
          <input type="text"
            // TODO add the value and onChange attributes
            />
          <br />
          <label>Last:</label>
          <input type="text"
            // TODO add the value and onChange attributes
            />
          <br />
          <button>Submit</button>
        </form>
        <div style={{textAlign: 'left'}}>{this.displayState()}</div>
      </div>
    )
  }
}
