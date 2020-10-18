import React, {Component} from "react";

class Counter extends Component {
    state = { // private data
        id: this.props.id,
        value: this.props.value,
    };

    style = { // easy style apply
        fontSize: 25,
        fontWeight: "bold"
    };

    incrementCounter = () => { // use THIS of parent
        this.setState({value: this.state.value + 1});
    }

    formaToZero() {  // foo
        const {value} = this.state;
        if (value === 0) {
            return "Zero";
        }
        return value;
    }

    yellowOrBlue() {
        let b_span_class = "badge m-2 badge-";
        b_span_class += this.state.value === 0 ? 'warning' : 'primary';
        console.log(b_span_class)
        return b_span_class
    }


    render() {
        return (
            <React.Fragment>
                <p style={this.style} className={this.yellowOrBlue()}> {this.formaToZero()} </p>
                <button onClick={this.incrementCounter} className="btn btn-secondary btn-sm"> Increment</button>
                <button onClick={() => {
                    this.props.onDel(this.state.id)
                }} className="btn btn-danger btn-sm m-3"> Remove
                </button>

            </React.Fragment>
        );
    }

}

export default Counter; // global
