import React, { Component } from 'react';
import {Router, Route, browserHistory} from 'react-router';


import Container from './components/container.js';
import Extra from './components/extra.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import NotFound from './components/notFound.js';
import './App.css';

class App extends Component {
  render() {
    return (
	<Router history={browserHistory}>
		<Route path={'/'} component={Container}></Route>
		<Route path={'/extra'} component={Extra}></Route>
		<Route path={'/about'} component={About}></Route>
		<Route path={'/contact'} component={Contact}></Route>
		<Route path={'*'} component={NotFound}></Route>	
	</Router>	
    );
  }
}

export default App;
