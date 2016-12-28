//layout for main page
import React, { Component } from 'react'

import Header from './header.js';
import Nav from './navigation.js';

class extra extends Component {

        render(){

                return(
                        <div id="extra">
                                <Header/>
                                <Nav/>
                                <div id="extra-story">
					<h3>Not so smart cat</h3>
					<img alt="smartCat" src={require("../img/smartCat.png")} />
					<p>
						There is a cat who likes to play<br/>
						To play night and day <br/>
						This cat really likes to play <br/>
						The cat has toys <br/>
						The cat has books <br/>
						But books are not fun to play <br/>
						The cat has hopes <br/>
						The cat has dreams <br/>
						The cat left home in order to play <br/>
						<br/>
						There is a sign <br/>
						A sign so big, it covers the sky <br/>
						A big green sign <br/>
						With directions on how to get by <br/>
						The cat is lost <br/>
						The cat is scared <br/>
						The cat looks at the sign <br/>
						But it still feels fear <br/>
						The cat could not read <br/>
						The cat could not flee <br/>
						If only the cat could read <br/>
						<br/>
						The cat went home <br/>
						with a frown on it's face <br/>
						There was not much to do <br/>
						But to cry in a bad taste 	
						 	
					</p>
				</div>
                        </div>

                )
        }

}

export default extra;

