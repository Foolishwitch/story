//layout for about page
import React, { Component } from 'react'

import Header from './header.js';
import Nav from './navigation.js';

class about extends Component {

        render(){

                return(
                        <div id="about">
                                <Header/>
                                <Nav/>
                                <p>
					This website is dedicated to myself and my stories. People have always told me I had interesting stories. It's nice to see people closing their eyes and listening so attentively. It especially brings a tear to my eyes when I'm done with my eye and people start wildly clapping. 
				</p>
                        </div>

                )
        }

}

export default about;

