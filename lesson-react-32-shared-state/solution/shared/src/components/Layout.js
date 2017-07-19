
import React, { Component } from 'react'

import Marketing from './Marketing'
import Login from './Login'

var styles = {
  container: {
    display: 'flex'
  },
  left: {
    border: '1px solid black',
    flex: 1
  },
  right: {
    border: '1px solid black',
    flex: 2
  }
}
export default class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'Unknown User'
    }
  }

  setName = (name) => {
    this.setState({name})
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.left}>
          <Login
            name={this.state.name}
            setName={this.setName}
          ></Login>
        </div>
        <div style={styles.right}>
          <Marketing
            name={this.state.name}></Marketing>
        </div>
      </div>
    )
  }
}
