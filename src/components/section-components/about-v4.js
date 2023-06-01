import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';

const AboutV4 = () => {

	let publicUrl = process.env.PUBLIC_URL + '/'

	const script = useSelector(selectScript)

	return <div className="ltn__about-us-area pt-120--- pb-90 mt-80 go-top">
		<div className="container">
			<div className="row about-img-section">
				<div className="col-lg-6 col-sm-12 flex-center">
						<img className='about-img' src={publicUrl + "assets/img/team/about.jpg"} alt="About Us" />
				</div>
				<div className="col-lg-6 align-self-center">
					<div className="about-us-info-wrap">
						<div className="ltn__section-title-2--- mb-20">
							<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">За нас</h6>
							<h1 className="section-title"><span>{script.about[2]}</span></h1>
							<p className='mt-40'>{script.about[4] + ' '}<a style={{color : "var(--ltn__secondary-color)"}} href='https://bulgariansocietygro.nl' target="_blank">Bulgarian Society Groningen (BGSG) </a>{' ' + script.about[5]}</p>
							<p className='mt-40'>{script.about[6]}</p>
						</div>
						<ul className="ltn__list-item-half clearfix">
							<li>
								<i className="flaticon-deal" />
								{script.about[7]}

							</li>
							<li>
								<i className="flaticon-home-2" />
								{script.about[8]}
							</li>
							<li>
								<i className="flaticon-official-documents" />
								{script.about[9]}

							</li>

						</ul>


					</div>
				</div>
			</div>
		</div>
	</div>
}


export default AboutV4