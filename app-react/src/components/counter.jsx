import React, {Component} from "react";

class Counter extends Component {
    // in props
    // counter {id:0 val:0}
    // deleteById(id)
    // incrementCounter(id)
    style = { // easy style apply
        fontSize: 25,
        fontWeight: "bold"
    };

    formaToZero() {  // foo
        const {value} = this.props.counter;
        if (value === 0) {
            return "Zero";
        }
        return value;
    }

    yellowOrBlue() {
        let b_span_class = "badge m-2 badge-";
        b_span_class += this.props.counter.value === 0 ? 'warning' : 'primary';
        return b_span_class
    }


    render() {
        // instead of this.props.X
        const {deleteById, counter, incrementCounter} = this.props

        return (
            <React.Fragment>
                <p style={this.style} className={this.yellowOrBlue()}> {this.formaToZero()} </p>
                <button onClick={() => {
                    incrementCounter(counter.id)
                }} className="btn btn-secondary btn-sm"> Increment
                </button>
                <button onClick={() => {
                    deleteById(counter.id)
                }} className="btn btn-danger btn-sm m-3"> Remove
                </button>
            </React.Fragment>
        );
    }

}

export default Counter; // global
