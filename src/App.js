import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
import RegisterUser from './RegisterUser';
import CheckAnagaram from './CheckAnagaram';


class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome </h1>
          
        </header>
        <div>
        <div>
                <ul>
                    <li><Link to="/login">Register From</Link></li>
                    <li><Link to="/checknumber">Anagaram</Link></li>
                </ul>
            </div>
          </div>
      
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/login"/>
                )}/>
                 <Route exact path='/login' component={RegisterUser} />
                 <Route exact path='/checknumber' component={CheckAnagaram} />
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
