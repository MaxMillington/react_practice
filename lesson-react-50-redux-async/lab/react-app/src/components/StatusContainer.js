import { connect } from 'react-redux';

// TODO import the Status component
import Status from './Status'

const mapStateToProps = (state, ownProps) => {
 	return {
    // TODO map the attribute, number, to the todos.length from the state
 		number:			state.todos.todos.length
 	}
};

// TODO build the wrapper using the connect() function from react-redux
// TODO Note, there are NO callbacks mapped
let StatusContainer = connect(
  // TODO mapStateToProps here
	mapStateToProps
)(Status);

export default StatusContainer
