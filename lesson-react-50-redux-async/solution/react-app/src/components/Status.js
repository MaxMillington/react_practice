import React, {Component} from 'react'

export default class Status extends Component {

  getCountMessage() {
    switch (this.props.number) {
      case 0:
        return 'There is nothing to TODO. Enter one?';
      case 1:
        return 'There is 1 TODO.';
      default:
        return 'There are ' + this.props.number + ' TODOs';
    }
  }

  render() {
    return (
      <div id='status'>
        <h1>This is the status page</h1>
        <h1>{this.getCountMessage()}</h1>
      </div>
    );
  }
}
