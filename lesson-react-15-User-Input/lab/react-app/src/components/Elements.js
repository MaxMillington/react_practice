
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
    const gender = e.target.elements[0].checked? e.target.elements[0].value : e.target.elements[1].checked && e.target.elements[1].value
    this.setState({
      gender,
      ready: e.target.elements[2].checked,
      firstname: e.target.elements[3].value,
      lastname: e.target.elements[4].value
    })
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
