import React from 'react'

export default function Status(props) {

    function getCountMessage() {
        switch (props.number) {
            case 0: return 'There is nothing to TODO. Enter one?';
            case 1: return 'There is 1 TODO.';
            default: return 'There are ' + props.number + ' TODOs';
        }
    }

    return (
        <div id='status'>
            <h1>This is the status page</h1>
            <h1>{getCountMessage()}</h1>
        </div>
    );
}
