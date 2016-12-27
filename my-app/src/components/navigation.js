//navigation component
import React, { Component } from 'react';
import {Link} from 'react-router';

class navigation extends Component {

	constructor(){
                super()
                this.state = {
                        nav : ""
                }
        }

        render(){

                return(
                        <div id="navigation">
				<a id="burger-nav" onClick={this.clicked.bind(this)}></a>
				<ul id="nav" className={this.state.nav}>
					<li><Link to='/'> Home </Link></li>
					<li><Link to='/about'> About </Link></li>
					<li><Link to='/contact'> Contact </Link></li>
				</ul>
                        </div>
                )
        }

	clicked(){

		if(this.state.nav === "open"){
      			this.setState({
				nav : ""
			});
    		}	
    		else{
      			this.setState({
				nav : "open"
			});
    		}

	}

}

export default navigation;
                         
