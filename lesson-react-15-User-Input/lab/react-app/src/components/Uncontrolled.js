
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
    const gender = this._male.checked ? 'male' : this._female.checked && 'female'
    this.setState({
      gender,
      firstname: this._firstname.value,
      lastname: this._lastname.value,
      ready: this._ready.checked,
    })
  }

  render() {
    return (
      <div className="item">
        <p>Uncontrolled</p>
        <form onSubmit={this.submit}>
          <label>Male:</label>
          <input type="radio" name="gender" value="male"
            ref={(input) => this._male = input}
            />

          <label>Female:</label>
          <input type="radio" name="gender" value="female"
                 ref={(input) => this._female = input}
            />
          <br />

          <label>Ready?</label>
          <input type="checkbox"
                 ref={(input) => this._ready = input}
            />
          <br />

          <label>First:</label>
          <input type="text"
                 ref={(input) => this._firstname = input}
            />
          <br />

          <label>Last:</label>
          <input type="text"
                 ref={(input) => this._lastname = input}
            />
          <br />

          <button>Submit</button>
        </form>
        <div style={{textAlign: 'left'}}>{this.displayState()}</div>
      </div>
    )
  }
}
