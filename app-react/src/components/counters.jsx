import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [], // contains {id , value}
        key: 0
    };

    keyGenerate() {
        return ++this.state.key;
    }

    deleteById = (x) => {
        let {counters} = this.state;
        this.setState({counters: counters.filter(counter => counter.id !== x)})
    }

    createCounters() {
        return this.state.counters.map(obj => (
            <div key={obj.id}><br/> <Counter id={obj.id} value={obj.value} onDel={this.deleteById}/></div>)
        )
    }

    createNewCounter = () => {
        let temp = this.state.counters;
        temp.push({id: this.keyGenerate(), value: 0});
        this.setState({counters: temp});
    }

    render() {
        return (
            <React.Fragment>
                <img src='https://picsum.photos/200' alt=""/>
                {this.createCounters()}
                <button onClick={this.createNewCounter} className="btn btn-danger"> Add new
                </button>
            </React.Fragment>
        );
    }

}

export default Counters; // global
