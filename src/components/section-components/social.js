import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Social extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__social-media">
			<ul>
				
				<li><a href="https://www.linkedin.com/tuna-theme" title="LinkedIn"><i className="fab fa-linkedin" /></a></li>
			</ul>
		</div>
        }
}

export default Social