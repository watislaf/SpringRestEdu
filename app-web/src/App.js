import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './home/taskList/taskApp.css';
import taskApp from "./home/taskList/taskApp";


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact={true} component={taskApp}/>
                    <Route path='/tasklist' exact={true} component={taskApp}/>
                </Switch>
            </Router>
        )
    }
}

export default App;

// Live Cycle Hooks ->
// Mount -> construcor / render / componentDidMount
// update ->   render / componentDidUpdate
// UnMount(destructor) ->   componentWillUnMount