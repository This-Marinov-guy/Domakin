import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Social extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL + '/'

        return <div className="ltn__social-media">
            <ul>
                <li><a href="https://www.linkedin.com/company/domakin/" target='_blank' title="LinkedIn"><i className="fab fa-linkedin" /></a></li>
                <li><a href="https://www.instagram.com/domakin.nl/" target='_blank' title="Instagram"><i className="fab fa-instagram" /></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100093230497851" target='_blank' title="Facebook"><i className="fab fa-facebook" /></a></li>
            </ul>
        </div>
    }
}

export default Social