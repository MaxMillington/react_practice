
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
          <label htmlFor="male">Male:</label>
          <input type="radio" id="male" name="gender" value="male"
            onClick={(e) => this.setState({gender: 'male'})}
            checked={this.state.gender === 'male'}
            />

          <label htmlFor="female">Female:</label>
          <input type="radio" id="female" name="gender" value="female"
            onClick={(e) => this.setState({gender:'female'})}
            checked={this.state.gender === 'female'}
            />
          <br />

          <label htmlFor="ready">Ready?</label>
          <input
            type="checkbox"
            value={this.state.ready}
            onChange={(e) => this.setState({ready: e.target.checked})}
            />
          <br />

          <label htmlFor="firstname">First:</label>
          <input
            type="text"
            id="firstname"
            value={this.state.firstname}
            onChange={(e) => this.setState({firstname: e.target.value})}
            />
          <br />
          <label htmlFor="lastname">Last:</label>
          <input
            type="text"
            id="lastname"
            value={this.state.lastname}
            onChange={(e) => this.setState({lastname: e.target.value})}
            />
          <br />
          <button>Submit</button>
        </form>
        <div style={{textAlign: 'left'}}>{this.displayState()}</div>
      </div>
    )
  }
}
