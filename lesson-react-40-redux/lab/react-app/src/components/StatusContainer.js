import { connect } from 'react-redux';

// TODO import the Status component

const mapStateToProps = (state, ownProps) => {
 	return {
    // TODO map the attribute, number, to the todos.length from the state
    // NOTE: the reference should be 'state.todos.todos', using the namespace
 	}
};

// TODO build the wrapper using the connect() function from react-redux
// TODO Note, there are NO callbacks mapped
let StatusContainer = connect(
  // TODO mapStateToProps here
)(Status);

export default StatusContainer
