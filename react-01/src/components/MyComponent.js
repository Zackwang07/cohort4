import React from 'react';

class MyComp extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    This is myComponent
                    <button onClick={this.props.whatToSay}>Push Me</button>
                </h1>
            </div>
        )
    }
}

export default MyComp;