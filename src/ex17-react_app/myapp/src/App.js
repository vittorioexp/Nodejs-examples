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