//contents that belong in main page
import React, { Component } from 'react';
import pages from '../data/page1.js';

class content extends Component {
		
	constructor(){
		super()
		this.state = {
			page : pages
		}
	}

        render(){
		
		const paraList = this.state.page.map( (para, index) => {
			return(
				<p key={index}>{para}</p>
			)
		})

                return(
                        <div id="content">
				{paraList}
                        </div>
                )
        }

}

export default content;
                        
