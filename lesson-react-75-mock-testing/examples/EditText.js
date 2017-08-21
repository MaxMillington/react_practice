
import React, { Component } from 'react';
import { TextInput } from 'react-native';

class EditText extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }

    endEdit() {
        this.props.endEdit( this.state.text );
        this.setState('')
    }
    render() {
        return (
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                onSubmitEdit={this.endEdit.bind(this)}
            />
        );
    }
}
