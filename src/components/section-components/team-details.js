import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const TeamMEmberDetails = () => {
    let publicUrl = process.env.PUBLIC_URL + '/'

    return <div className="row">
        <div className="col-lg-4">
            <div className="ltn__team-details-member-info text-center mb-40">
                <div className="team-details-img">
                    <img src={publicUrl + "assets/img/team/4.jpg"} alt="Team Member Image" />
                </div>
                <h2>Rosalina D. William</h2>
                <h6 className="text-uppercase ltn__secondary-color">Property Seller</h6>
                <div className="ltn__social-media-3">
                    <ul>
                        <li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
                        <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-lg-8">
            <div className="ltn__team-details-member-info-details">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="ltn__team-details-member-about">
                            <ul>
                                <li><strong>Positions:</strong> Senior Property Seller</li>
                                <li><strong>Experience:</strong> 10+ Years</li>
                                <li><strong>Location:</strong> 13/A, NYC</li>
                                <li><strong>Practice Area:</strong> Property Seller</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ltn__team-details-member-about">
                            <ul>
                                <li><strong>Email:</strong> example@example.com</li>
                                <li><strong>Fax:</strong> +0123-456 789</li>
                                <li><strong>Phone:</strong> +0123-456 789</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu ntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            </div>
        </div>
    </div>
}


const TeamDetails = () => {
    return <div className="ltn__team-details-area mb-120">
        <div className="container">
            <TeamMEmberDetails />
        </div>
    </div>
}


export default TeamDetails