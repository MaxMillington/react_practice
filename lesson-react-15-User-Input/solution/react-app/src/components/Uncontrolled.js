
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

  submit = (e) => {
    e.preventDefault()
    this.setState({firstname: this._firstname.value})
    this.setState({lastname: this._lastname.value})
    this.setState({ready: this._ready.checked})
    let gender = this._male.checked ? 'male' : this._female.checked && 'female'
    this.setState({gender: gender})
  }

  displayState = () => {
    return  JSON.stringify(this.state)
      .replace(/[{}"]/g, '')
      .replace(/:/g, ' : ')
      .split(',')
      .map( (item, idx) => <div key={idx}>{item}</div>)
  }

  render() {
    return (
      <div className="item">
        <p>Uncontrolled</p>
        <form onSubmit={this.submit}>

          <label htmlFor="male">Male:</label>
          <input type="radio" id="male" name="gender" value="male"
            ref={(input) => this._male = input}
            />

          <label htmlFor="female">Female:</label>
          <input type="radio" id="female" name="gender" value="female"
            ref={(input) => this._female = input}
            />
          <br />

          <label htmlFor="ready">Ready?</label>
          <input
            type="checkbox"
            ref={(input) => this._ready = input}
            />
          <br />

          <label htmlFor="firstname">First:</label>
          <input
            type="text"
            id="firstname"
            ref={(input) => this._firstname = input} />
          <br />

          <label htmlFor="lastname">Last:</label>
          <input
            type="text"
            id="lastname"
            ref={(input) => this._lastname = input} />
          <br />

          <button>Submit</button>
        </form>
        <div style={{textAlign: 'left'}}>{this.displayState()}</div>
      </div>
    )
  }
}
