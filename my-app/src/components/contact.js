//layout for contact page
import React, { Component } from 'react'

import Header from './header.js';
import Nav from './navigation.js';

class contact extends Component {

        render(){

                return(
                        <div id="contact">
                                <Header/>
                                <Nav/> 
				<div className="contact-message">
					<p>
						Contact Me
					</p>
					<ul>
						<li>Email: shucklecorp@gmail.com</li>
					</ul>
				</div>
                        </div>

                )
        }

}

export default contact;

