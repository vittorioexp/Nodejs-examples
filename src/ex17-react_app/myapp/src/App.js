import React from 'react';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const colorStyle = {
            color:this.props.color,
            fontSize:this.props.size+"px"
        }
        return (
            <div>
                <div style={colorStyle}>
                    Hello World!
                </div>
            </div>
        );
    }
}

export default App;


/*
function App(props) {
    const colorStyle = {
        color:props.color,
        fontSize:props.size+"px"
    }
    return (
        <div>
            <div style={colorStyle}>
                Hello World!
            </div>
        </div>
    );
}

export default App;
 */
