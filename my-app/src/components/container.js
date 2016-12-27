//layout for main page
import React, { Component } from 'react'

import Header from './header.js';
import Nav from './navigation.js';
import Content from './content.js';

class container extends Component {

        render(){

                return(
			<div id="container">
        			<Header/>
        			<Nav/>
        			<Content/>
      			</div>

                )
        }

}

export default container;


