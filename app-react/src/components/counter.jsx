import React, {Component} from "react";

class Counter extends Component {
    state = { // contane data
        count: 0,
        imageUrl: 'https://picsum.photos/200'
    };

    // constructor(props) {
    //     super(props);
    //     console.log(this)
    //     this.Incr = this.Incr.bind(this);
    // }

    Incr = () => { // use THIS of parent
        this.setState({count: this.state.count + 1});
    }

    formater() {  // foo
        const {count} = this.state;
        if (count === 0) {
            return "Zero";
        }
        return count;
    }

    b_span_class() {
        let b_span_class = "badge m-2 badge-";
        b_span_class += this.state.count === 0 ? 'warning' : 'primary';
        console.log(b_span_class)
        return b_span_class
    }

    style = { // style set example
        fontSize: 25,
        fontWeight: "bold"
    };

    render() {
        return (
            <React.Fragment>
                <img src={this.state.imageUrl} alt=""/><br/>
                <span style={this.style} className={this.b_span_class()}> {this.formater()} </span>
                <button onClick={this.Incr} className="btn btn-secondary btn-sm"> Increment</button>
            </React.Fragment>
        );
    }

}

export default Counter; // global
