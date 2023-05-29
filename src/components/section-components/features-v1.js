import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';

const FeaturesV1 = (props) => {

	let publicUrl = process.env.PUBLIC_URL + '/'

	let customClass = props.customClass ? props.customClass : ''

	const script = useSelector(selectScript);

	return <div className={customClass} >
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="section-title-area ltn__section-title-2--- text-center">
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">{script.features[0]}</h6>
						<h1 className="section-title">{script.features[1]}</h1>
					</div>
				</div>
			</div>
			<div className="row ltn__custom-gutter--- justify-content-center go-top">
				<div className="col-lg-4 col-sm-6 col-12">
					<Link to="services/viewing">
						<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
							<div className="ltn__feature-icon">
								<img src={publicUrl + "assets/img/icons/icon-img/23.png"} alt="#" />
							</div>
							<div className="ltn__feature-info">
								<h3>{script.features[2]}</h3>
								<p>{script.features[3]}</p>
							</div>
						</div>
					</Link>
				</div>
				<div className="col-lg-4 col-sm-6 col-12">
					<Link to="services/renting">
						<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
							<div className="ltn__feature-icon">
								<img src={publicUrl + "assets/img/icons/icon-img/22.png"} alt="#" />
							</div>
							<div className="ltn__feature-info">
								<h3>{script.features[5]}</h3>
								<p>{script.features[6]}</p>
								{/* <Link className="ltn__service-btn" to="/service-details">Find A Home <i className="flaticon-right-arrow" /></Link> */}
							</div>
						</div>
					</Link>

				</div>
				<div className="col-lg-4 col-sm-6 col-12">
					<Link to="services/lending">

						<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
							<div className="ltn__feature-icon">
								<img src={publicUrl + "assets/img/icons/icon-img/21.png"} alt="#" />
							</div>
							<div className="ltn__feature-info">
								<h3>{script.features[7]}</h3>
								<p>{script.features[9]}</p>
								{/* <Link className="ltn__service-btn" to="/service-details">Find A Home <i className="flaticon-right-arrow" /></Link> */}
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	</div>
}


export default FeaturesV1