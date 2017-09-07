import React, {Component, PropTypes} from 'react'

export class ImAComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  static propTypes = {
    handleIt: PropTypes.func.isRequired
  }
  static defaultProps = {
    name: "Help, I'm not identified"
  }

  _click= (e) => {
    e.preventDefault();
    this.props.handleIt(this.props.name)
  }
  render() {
    return (
      <div onClick={this._click}>Hello, ImAComponent</div>
    )
  }
}

export function ImAFunction( {name='Default', handleIt} ) {
  function _click(e) {
    e.preventDefault();
    handleIt(name)
  }
  return (
    <div onClick={_click}>Hello, ImAFunction</div>
  )
}

ImAFunction.prototype.propTypes = {
  handleIt: PropTypes.func.isRequired,
  name: PropTypes.string
}



const ImACreateClass = React.createClass({
    getInitialState() {
      return {
        myState: 'hello'
      }
    },
    propTypes: {
      handleIt: PropTypes.func.isRequired,
      name: PropTypes.string
    },
    getDefaultProps() {
      return {
        name: 'Unknown Name in the CreateClass'
      }
    },

    _click(e) {
      e.preventDefault();
      this.props.handleIt(this.props.name)
    },
    render() {
      return (
        <div onClick={this._click} >Hello {this.props.name}, ImACreateClass</div>
      )
    }
})

//export ImACreateClass


export default class Examples extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: 'Click on Something',
      defaultInfo: 'Using Default Values'
    }
    this._handleIt = this._handleIt.bind(this)
    this._handleIt2 = this._handleIt2.bind(this)
  }
  _handleIt( info ) {
    this.setState({ info })
  }
  _handleIt2( defaultInfo ) {
    this.setState({ defaultInfo })
  }
  render() {
    return (
      <div>
        <div style={{border: '1px solid black'}}>
        <h1>Examples with VALUES for the name</h1>
        <h2>{this.state.info}</h2>
          <ImAComponent name="Component" handleIt={this._handleIt}></ImAComponent>
          <ImACreateClass name="React.CreateClass" handleIt={this._handleIt}></ImACreateClass>
          <ImAFunction name="Function" handleIt={this._handleIt}></ImAFunction>
        </div>

        <div style={{border: '1px solid black'}}>
        <h1>Examples using DEFAULT values for name</h1>
        <h2>{this.state.defaultInfo}</h2>
          <ImAComponent handleIt={this._handleIt2}></ImAComponent>
          <ImACreateClass handleIt={this._handleIt2}></ImACreateClass>
          <ImAFunction handleIt={this._handleIt2}></ImAFunction>
        </div>

      </div>
    )
  }
}
