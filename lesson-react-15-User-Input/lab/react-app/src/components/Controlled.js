
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
    const name = e.target.name
    e.target.type === 'checkbox' ? this.setState({ [name]: e.target.checked}) : this.setState({ [name]: e.target.value })
    console.log('yo', this.state)
  }

  render() {
    return (
      <div className="item">
        <p>Controlled</p>
        <form onSubmit={this.submit}>
          <label>Male:</label>
          <input
            type="radio"
            name="gender"
            value="male"
            onClick={(e) => this.setState({ gender: 'male' })}
            checked={this.state.gender === 'male'}
          />

          <label>Female:</label>
          <input
            type="radio"
            name="gender"
            value="female"
            onClick={(e) => this.setState({ gender: 'female' })}
            checked={this.state.gender === 'female'}
          />
          <br />

          <label>Ready?</label>
          <input
            type="checkbox"
            name="ready"
            onClick={(e) => this.setState({ ready: !this.state.ready })}
            />
          <br />

          <label>First:</label>
          <input
            type="text"
            name='firstname'
            onChange={(e) => { this.setState({ firstname: e.target.value })}}
            value={this.state.firstname}
          />
          <br />
          <label>Last:</label>
          <input
            type="text"
            name='lastname'
            onChange={(e) => { this.setState({ lastname: e.target.value })}}
            value={this.state.lastname}
          />
          <br />
          <button>Submit</button>
        </form>
        <div style={{textAlign: 'left'}}>{this.displayState()}</div>
      </div>
    )
  }
}
