import { connect } from 'react-redux';

import Status from './Status'

const mapStateToProps = (state, ownProps) => {
 	return {
 		number:			state.todos.todos.length
 	}
};

let StatusContainer = connect(
	mapStateToProps
)(Status);

export default StatusContainer
