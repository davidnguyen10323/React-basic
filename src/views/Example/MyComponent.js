import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Manh',
        chanel: 'hoi dan it'
    }

    render() {

        return (
            <>
                <div className="first">
                    hello my name is {this.state.name}
                </div>
                <div className="second">
                    My chanel: {this.state.chanel}
                </div>
            </>
        )
    }

}

export default MyComponent;