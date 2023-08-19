import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectScript } from '../../redux/language';
import RequestForm from './request-form';

const PropertyItem = (props) => {
	let publicUrl = process.env.PUBLIC_URL + '/'

	const script = useSelector(selectScript)

	return (
		<Fragment>
			<div className="col-xl-4 col-sm-6 col-12">
				<div className="ltn__product-item ltn__product-item-4 text-center---">
					<div className="product-img go-top">
						<Link to={publicUrl + props.main_image} data-rel={`lightcase:${props.description[0]}`}>
							<img src={publicUrl + props.main_image} alt="Галерия" />
						</Link>

						<div className="product-badge">
							<ul>
								<li className={`sale-badge ${props.free ? 'bg-green' : 'bg-red'}`}>{props.status}</li>
							</ul>
						</div>
						<div className="product-img-location-gallery">
							<div className="product-img-location">
								<ul>
									<li>
										<i className="flaticon-pin" /> {props.location}
									</li>
								</ul>
							</div>
							<div className="product-img-gallery go-top">
								<ul>
									<li>
										{props.images.map((value, index) => {
											return <Link key={index} to={publicUrl + value} data-rel={`lightcase:${props.description[0]}`}>{index === 0 && <Fragment><i className="fas fa-camera" /> {props.images.length + 1} </Fragment>}</Link>
										})}
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="product-info">
						<div className="product-price">
							<span>&euro;{props.price}<label>/ {script.renting[10]}</label></span>
						</div>
						<h2 className="product-title go-top">{props.type}</h2>
						<ul className="product-description">
							{props.description.map((value, index) => { return <p key={index}>{value}</p> })}
						</ul>
					</div>
					<div className="product-info-bottom">
						<div className="product-hover-action m--a">
							<button disabled={!props.free} id={props.description[0] + ' ' + props.location} onClick={(event) => { props.setSelectedProperty(event.target.id); }} className={(props.selectedProperty === props.description[0] + ' ' + props.location ? "theme-btn-1" : "theme-btn-2") + " btn btn-effect-1 text-uppercase button-renting"} title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
								{props.selectedProperty === props.description[0] + ' ' + props.location ? <span><i style={{ fontSize: "15px" }} className="fa-solid fa-check icon"></i></span> : script.renting[11]}
							</button>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

const ProductSliderV4 = (props) => {
	const script = useSelector(selectScript);

	return <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-70">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="section-title-area ltn__section-title-2--- text-center">
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">{script.renting[8]}</h6>
						<h1 className="section-title">{script.renting[9]}</h1>
					</div>
				</div>
			</div>
			<div className="row ltn__product-slider-item-three-active slick-arrow-1">
				{props.propertyList.length === 0 ? <h3 className='col-12 text-center'>{script.renting[12]}</h3> : props.propertyList.map((value, index) => { return <PropertyItem key={index} status={value.status} free={value.free} price={value.price} type={value.type} location={value.location} description={value.description} main_image={value.main_image} images={value.images} setSelectedProperty={props.setSelectedProperty} selectedProperty={props.selectedProperty} /> })}
			</div>
			{props.selectedProperty && <div id='form-renting' className='row'>
				<RequestForm onSubmit={props.onSubmit} />
			</div>}
		</div>
	</div>

}


export default ProductSliderV4