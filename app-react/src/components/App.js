import React, {Component} from 'react';
import './App.css';
import Counters from "./counters";
import Navbar from "./navbar";
import ContainerForForm from "./containerForForm";

import axios from 'axios';

class App extends Component {
    myDomain = 'api.mydomain.com'

    componentDidMount() {
        axios.get('http://' + this.myDomain + ':8080/api/tasks').then(
            (responce) => {
                console.log(responce.data)
            }
        )

        // get object and put it
    }

    onSubmit = (event) => {

        event.preventDefault(event);
        console.log(event.target.name.value);
        console.log(event.target.email.value);

        this.closeButton.click()
        let temp = this.state.counters;
        temp.push({id: this.idPretend, value: 0});
        this.setState({counters: temp});
    };

    state = {
        isAddDataShown: false,
        counters: [], // contains {id , value}
    };

    deleteById = (id) => {
        let new_counters = this.state.counters.filter(counter => counter.id !== id);
        this.setState({counters: new_counters})
    }

    reset = () => {
        let new_array = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        })
        this.setState({counters: new_array})
    }


    incrementCounter = (id) => { // use THIS of parent
        let temp = [...this.state.counters];
        let counter = this.state.counters.find((counter) => (counter.id === id));
        let index = temp.indexOf(counter);
        temp[index].value++;
        this.setState({counters: temp}); // !!!!!!!!!!!!
    }

    triggerNewCounter = (id, TriggerButton) => {
        this.setState({isAddDataShown: true}, () => {
            this.closeButton.focus();
        });
        this.idPretend = id;
        this.TriggerButton = TriggerButton


    }

    closeContainerForm = () => {
        this.setState({isAddDataShown: false});
        document.querySelector('html').classList.toggle('scroll-lock'); // lock
    }

    closeModal = () => {
        this.setState({isAddDataShown: false});
        this.TriggerButton.focus();
        document.querySelector('html').classList.toggle('scroll-lock'); // unlock
    };


    render() {
        return <div className="App">
            <Navbar counters={this.state.counters}/>
            <Counters counters={this.state.counters}
                      deleteById={this.deleteById}
                      incrementCounter={this.incrementCounter}
                      triggerNewCounter={this.triggerNewCounter}
                      reset={this.reset}/>
            {this.state.isAddDataShown ?
                <ContainerForForm
                    closeModal={this.closeModal}
                    closeButton={n => this.closeButton = n}
                    onSubmit={this.onSubmit}
                /> : null
            }
        </div>;
    }
}

export default App;

// Live Cycle Hooks ->
// Mount -> construcor / render / componentDidMount
// update ->   render / componentDidUpdate
// UnMount(destructor) ->   componentWillUnMount