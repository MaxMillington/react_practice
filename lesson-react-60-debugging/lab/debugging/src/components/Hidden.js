import React from 'react';

import './Hidden.css'

const STATUS = {
    NORMAL: 'block',
    HIDDEN: 'none'
};

export default class Hidden extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: STATUS.NORMAL
        };
    }
    toggle = () => {
        let temp = (this.state.visible === STATUS.HIDDEN)
            ? STATUS.NORMAL : STATUS.HIDDEN;
        this.setState({visible: temp});
    }
    render() {
        return (
            <div onClick={this.toggle}>
                <span>Click Here</span>
                <p className={this.state.visible} >Can you see me now?</p>
            </div>
        );
    }
}
