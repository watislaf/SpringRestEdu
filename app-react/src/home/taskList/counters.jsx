import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component {
    // in props
    // counters [{id:0 val:0}]
    // deleteById(id)
    // incrementCounter(id)
    // createNewCounter(id)
    // rest()

    key = 0 // no need to state

    keyGenerate() {
        return ++this.key;
    }

    createCounters() {
        return this.props.counters.map(obj => (
            <div key={obj.id}><br/>
                <Counter counter={this.props.counters.find((obj2) => (obj2.id === obj.id))}
                         deleteById={this.props.deleteById} incrementCounter={this.props.incrementCounter}/>
            </div>)
        )
    }

    render() {
        return (
            <React.Fragment>
                <img src='https://picsum.photos/200' alt=""/>
                <button onClick={this.props.reset} className="btn-big ">Reset</button>
                {this.createCounters()}
                <button ref={(n) => this.createButton = n}
                        onClick={() => {
                            this.props.triggerNewCounter(this.keyGenerate(), this.createButton)
                            document.querySelector('html').classList.toggle('scroll-lock');
                        }
                        } className="btn btn-danger"> Add new
                </button>
            </React.Fragment>
        );
    }

}

export default Counters; // global
