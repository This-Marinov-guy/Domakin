import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectScript } from '../../redux/language';
import { Tooltip } from 'primereact/tooltip';
import RequestForm from './request-form';

const EmergencyPropertyItem = (props) => {
	let publicUrl = process.env.PUBLIC_URL + '/'

	const script = useSelector(selectScript)

	return (
		<Fragment>
			<Tooltip target=".agent-img" />
			<div className="col-xl-4 col-sm-6 col-12">
				<div className="ltn__product-item ltn__product-item-4 text-center---">
					<div className="product-img go-top">
						<Link to={publicUrl + props.main_image} data-rel={`lightcase:${props.description[0]}`}>
							<img src={publicUrl + props.main_image} alt="Галерия" />
						</Link>
						<div className="product-badge">
							<div className="agent-img" data-pr-tooltip={props.owner.description}
								data-pr-position="top"
								style={{ fontSize: '2rem', cursor: 'pointer' }}>
								<img src={publicUrl + props.owner.image} alt="#" />
							</div>
						</div>
						<div className="product-img-location-gallery">
							<div className="product-img-location">
								<ul>
									<li>
										<i className="flaticon-pin" /> {props.location}
									</li>
								</ul>
							</div>
							{props.images.length && <div className="product-img-gallery go-top">
								<ul >
									<li >
										{props.images.map((value, index) => {
											return <Link key={index} to={publicUrl + value} data-rel={`lightcase:${props.description[0]}`}>{index === 0 && <Fragment><i className="fas fa-camera" /> {props.images.length + 1} </Fragment>}</Link>
										})}
									</li>
								</ul>
							</div>}
						</div>
					</div>
					<div className="product-info">
						<div className="product-price">
							{props.price ? <span>&euro;{props.price}<label>/ {script.renting[10]}</label></span> : <span>{script.renting[13]}</span>}
						</div>
						<h2 className="product-title go-top">{props.type}</h2>
						<ul className="product-description">
							<li className='row justify-content-around'>
								<i className="col-lg-2 col-md-2 col-sm-12 col-12 fa-solid fa-house icon_sm"></i>
								<p className='col-lg-10 col-md-10 col-sm-12 col-12'>{props.description.property}</p>
							</li>
							<li className='row justify-content-around'>
								<i className="col-lg-2 col-md-2 col-sm-12 col-12 fa-solid fa-calendar-days icon_sm"></i>
								<p className='col-lg-10 col-md-10 col-sm-12 col-12'>{props.description.period}</p>
							</li>
	
							<li className='row justify-content-around'>
								<i className="col-lg-2 col-md-2 col-sm-12 col-12 fa-solid fa-users icon_sm"></i>
								<p className='col-lg-10 col-md-10 col-sm-12 col-12'>{props.description.flatmates}</p>
							</li>
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

const ProductSliderV3 = (props) => {

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
				{props.propertyList.length === 0 ? <h3 className='col-12 text-center'>{script.renting[12]}</h3> : props.propertyList.map((value, index) => { return <EmergencyPropertyItem key={index} status={value.status} free={value.free} price={value.price} type={value.type} location={value.location} description={value.description} main_image={value.main_image} images={value.images} owner={value.owner} setSelectedProperty={props.setSelectedProperty} selectedProperty={props.selectedProperty} /> })}
			</div>
			{props.selectedProperty && <div id='form-renting' className='row'>
				<RequestForm onSubmit={props.onSubmit} />
			</div>}
		</div>
	</div>

}

export default ProductSliderV3