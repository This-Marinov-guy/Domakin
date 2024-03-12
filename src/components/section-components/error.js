import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';

const Error = () => {

	let publicUrl = process.env.PUBLIC_URL + '/'

	const script = useSelector(selectScript)

	return <div className="ltn__404-area ltn__404-area-1 mb-120 mt-100">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="error-404-inner text-center">
						<div className="error-img mb-30">
							<img src={publicUrl + "assets/img/others/error-1.png"} alt="#" />
						</div>
						<h1 className="error-404-title d-none">404</h1>
						<h2>{script.error[1]}</h2>
						{/* <h3>Oops! Looks like something going rong</h3> */}
						<p>{script.error[2]}</p>
						<div className="btn-wrapper go-top">
							<Link to="/" className="btn btn-transparent"><i className="fas fa-long-arrow-alt-left" />{script.error[3]}</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
}


export default Error