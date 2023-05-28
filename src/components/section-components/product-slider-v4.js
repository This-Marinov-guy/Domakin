import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectScript } from '../../redux/language';

const PropertyItem = (props) => {
	let publicUrl = process.env.PUBLIC_URL + '/'

	return (
		<Fragment>
			<div className="col-xl-4 col-sm-6 col-12">
				<div className="ltn__product-item ltn__product-item-4 text-center---">
					<div className="product-img go-top">
						<Link to="/product-details"><img src={publicUrl + props.images[0]} alt="#" /></Link>
						<div className="product-badge">
							<ul>
								<li className="sale-badge bg-green">{props.status}</li>
							</ul>
						</div>
						<div className="product-img-location-gallery">
							<div className="product-img-location">
								<ul>
									<li>
										<Link to="/product-details"><i className="flaticon-pin" /></Link>
									</li>
								</ul>
							</div>
							<div className="product-img-gallery go-top">
								<ul>
									<li>
										<Link to="/product-details"><i className="fas fa-camera" /> {props.images.length}</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="product-info">
						<div className="product-price">
							<span>&euro;{props.price}<label>/Month</label></span>
						</div>
						<h2 className="product-title go-top"><Link to="/product-details">{props.type}</Link></h2>
						<div className="product-description">
							{props.description.map((value, index) => { return <div key={index}><p >{value}</p><br /></div> })}
						</div>
					</div>
					<div className="product-info-bottom">
						<div className="product-hover-action m--a">
							<a href="#" className="btn theme-btn-1 btn-effect-1 text-uppercase" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
								Направи Запитване
							</a>

						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

const ProductSliderV4 = () => {

	const script = useSelector(selectScript);

	return <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-70">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="section-title-area ltn__section-title-2--- text-center">
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Услуги</h6>
						<h1 className="section-title">Предлагани имоти</h1>
					</div>
				</div>
			</div>
			<div className="row ltn__product-slider-item-three-active slick-arrow-1">
				{script.FOR_RENT.map((value, index) => { return <PropertyItem key={index} status={value.status} price={value.price} type={value.type} location={value.location} description={value.description} images={value.images} /> })}
			</div>
			{/* <PropertyWindow /> */}
		</div>
	</div>

}


export default ProductSliderV4