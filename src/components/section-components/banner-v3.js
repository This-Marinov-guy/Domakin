import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';

const BannerV3 = () => {

	let publicUrl = process.env.REACT_APP_PUBLIC_URL + '/'
	let imagealt = 'image'

	const script = useSelector(selectScript);

	return <div className="ltn__slider-area ltn__slider-3  section-bg-2">
		<div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
			{/* ltn__slide-item */}
			<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60" data-bs-bg={publicUrl + "assets/img/slider/groningen.jpg"}>
				<div className="ltn__slide-item-inner text-center">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 align-self-center">
								<div className="slide-item-info">
									<div className="slide-item-info-inner ltn__slide-animation">
										<h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home mr-5" /></span>{script.home[0]}</h6>
										<h1 style={{ marginBottom: "-20px" }} className="slide-title animated ">{script.home[1]}</h1><br /><h1 className="slide-title animated ">{script.home[2]}</h1>
										<div className="slide-brief animated">
											<p>{script.home[3]}</p>
										</div>
										{/* <div className="btn-wrapper animated go-top">
											<Link to="/contact" className="theme-btn-1 btn btn-effect-1">{script.home[4]}</Link>
										</div> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

}


export default BannerV3