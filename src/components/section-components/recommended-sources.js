import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comments from '../blog-components/comments';
import Sidebar from '../blog-components/sidebar';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';
const RecommendedSources = () => {
    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'
    const script = useSelector(selectScript);

    return (
        <div className="ltn__page-details-area ltn__blog-details-area mb-120">
            <div className="container">
                <div className="row">
                    <div className="ltn__blog-details-wrap">
                        <div className="ltn__page-details-inner ltn__blog-details-inner">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-category">
                                        <Link to="/services">{script.recommendations[2]}</Link>
                                    </li>
                                </ul>
                            </div>
                            <h2 className="ltn__blog-title">{script.recommendations[3]}
                            </h2>
                            <p>{script.recommendations[4]}</p>
                            <h2 className='mt-40'>{script.recommendations[5]}</h2>
                            <div className="list-item-with-icon-4">
                                <ul>
                                    <li><a href='https://050vastgoed.nl/' target='_blank'>050Vastgoed</a> | Email: info@050vastgoed.nl</li>
                                    <li><a href='https://jansenverhuurenbeheer.nl/' target='_blank'>Jansen verhuur & beheer</a> | Email: hugo@jansenverhuurenbeheer.nl</li>
                                    <li><a href='https://www.groningsepanden.nl/' target='_blank'>Groningse Panden</a> | Email: korten@groningsepanden.nl</li>
                                    <li><a href='https://bultenvastgoed.nl/' target='_blank'>Bulten Vastgoed</a> | Email: info@bultenvastgoed.nl</li>
                                    <li><a href='https://maxxhuren.nl/' target='_blank'>Maxx Aanhuurmakelaars</a> | Email: info@maxxgroningen.nl</li>
                                    <li><a href='http://livresidential.nl/' target='_blank'>LIV residential</a> | Email: info@livresidential.nl</li>
                                    <li><a href='https://www.pandomo.nl/' target='_blank'>Pandomo Makelaars</a> | Email: info@pandomo.nl</li>
                                    <li><a href='https://www.vbo.nl/' target='_blank'>VBO Makelaar</a> | Email: vbo@vbo.nl</li>
                                    <li><a href='https://www.nijestee.nl/' target='_blank'>Nijestee</a> | Email: info@nijestee.nl</li>
                                    <li><a href='https://www.vandermeulenmakelaars.nl/' target='_blank'>Van Der Meulen Makelaars Groningen</a> | Email: Info@vandermeulenmakelaars.nl</li>
                                    <li><a href='https://www.123wonen.nl/verhuurmakelaar/groningen' target='_blank'>Verhuurmakelaar - 123Wonen</a> | Email: groningen@123wonen.nl</li>
                                    <li><a href='https://househunting.nl/' target='_blank'>House Hunting</a> | Email: groningen@househunting.nl</li>
                                    <li><a href='https://www.allooy.nl/' target='_blank'>Allooy</a> | Email: info@allooy.nl</li>
                                    <li><a href='https://bensverhuurenbeheer.nl' target='_blank'>BensverhuurenBeheer</a> | Email: info@bensverhuurenbeheer.nl</li>
                                    <li><a href='https://www.campusgroningen.com/' target='_blank'>Campus Groningen</a> | Email: info@campusgroningen.com</li>
                                    <li><a href='https://www.dcwonen.com/' target='_blank'>DC Wonen</a> | Email: info@dcwonen.nl</li>
                                    <li><a href='https://www.kpmakelaars.nl/' target='_blank'>K&P Makelaars</a> | Email: info@kpmakelaars.nl</li>
                                    <li><a href='https://pegasusvastgoed.nl/' target='_blank'>Pegasus Vastgoed</a> | Email: info@pegasusvastgoed.nl</li>
                                    <li><a href='https://kamernet.nl/en' target='_blank'>Kamernet</a></li>
                                    <li><a href='https://qrent.nl/' target='_blank'>QRENT</a> | Email: info@qrent.nl</li>

                                </ul>
                            </div>
                            <h2 className='mt-40'>Facebook</h2>
                            <div className="list-item-with-icon-4">
                                <ul>
                                    <li><a href='https://www.facebook.com/groups/1403096933323844/' target='_blank'>Groningen Housing</a></li>
                                    <li><a href='https://www.facebook.com/groups/400200805138484/' target='_blank'>Groningen rooms, studios, and apartments</a></li>
                                    <li><a href='https://www.facebook.com/groups/1462626293842157/' target='_blank'>Groningen International Students Accommodation & Jobs</a></li>
                                    <li><a href='https://www.facebook.com/groups/162781577095263/' target='_blank'>Free Housing Announcements in Groningen (Group for students)</a></li>
                                    <li><a href='https://www.facebook.com/groups/StudentRoomsGroningen/' target='_blank'>Student rooms Groningen</a></li>
                                    <li><a href='https://www.facebook.com/groups/housingingroningen/' target='_blank'>Groningen Housing, Rooms, Apartments</a></li>
                                </ul>
                            </div>
                            <h2 className='mt-40'>Telegram</h2>
                            <div className="list-item-with-icon-4">
                                <ul>
                                    <li><a href='https://t.me/AnyHouseBot' target='_blank'>Anyhouse Bot </a></li>
                                    
                

                                </ul>
                            </div>
                            <blockquote>
                                <h6 className="ltn__secondary-color mt-0">{script.recommendations[6]}</h6>
                                {script.recommendations[7]}
                            </blockquote>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default RecommendedSources;
