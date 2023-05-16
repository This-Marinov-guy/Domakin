import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectScript } from '../../redux/language';

const Page_header = (props) => {

	let HeaderTitle = props.headertitle;
	let publicUrl = process.env.PUBLIC_URL + '/'
	let Subheader = props.subheader ? props.subheader : HeaderTitle
	let CustomClass = props.customclass ? props.customclass : ''
	let Img = props.Img ? props.Img : '14.jpg'

	const script = useSelector(selectScript)

	return (

		<div className={"ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image " + CustomClass} data-bs-bg={publicUrl + "assets/img/bg/14.jpg"}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="ltn__breadcrumb-inner">
							<h1 className="page-title">{HeaderTitle}</h1>
							<div className="ltn__breadcrumb-list">
								<ul>
									<li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" /></span>{script.header[0]}</Link></li>
									<li>{Subheader}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


	)

}


export default Page_header