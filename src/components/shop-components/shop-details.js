import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ShopDetails extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <div className="ltn__shop-details-area pb-10">
			<div className="container">
				<div className="row mt-80">
					<div className="col-12">
						<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
							<div className="ltn__blog-meta">
								<ul>
									<li className="ltn__blog-category">
										<Link to="#">Featured</Link>
									</li>
									<li className="ltn__blog-category">
										<Link className="bg-orange" to="#">For Rent</Link>
									</li>
									<li className="ltn__blog-date">
										<i className="far fa-calendar-alt" />May 19, 2021
									</li>
								</ul>
							</div>
							<h1>Diamond Manor Apartment</h1>
							<label><span className="ltn__secondary-color"><i className="flaticon-pin" /></span> Belmont Gardens, Chicago</label>
							<h4 className="title-2">Description</h4>
							<p>Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec
								Porta nibh venenatis cras sed felis eget velit aliquet. Neque volutpat ac tincidunt vitae semper
								quis lectus. Turpis in eu mi bibendum neque egestas congue quisque. Sed elementum tempus egestas
								sed sed risus pretium quam. Dignissim sodales ut eu sem. Nibh mauris cursus mattis molestee
								iaculis at erat pellentesque. Id interdum velit laoreet id donec ultrices tincidunt.</p>
							<p>To the left is the modern kitchen with central island, leading through to the unique breakfast family room which feature glass walls and doors out onto the garden and access to the separate utility room.</p>


							<h4 className="title-2">From Our Gallery</h4>
							<div className="ltn__property-details-gallery mb-30">
								<div className="row">
									<div className="col-md-6">
										<a href={publicUrl + "assets/img/properties/1.jpg"} data-rel="lightcase:myCollection">
											<img className="mb-30" src={publicUrl + "assets/img/properties/1.jpg"} alt="Image" />
										</a>
										<a href={publicUrl + "assets/img/properties/2.jpg"} data-rel="lightcase:myCollection">
											<img className="mb-30" src={publicUrl + "assets/img/properties/2.jpg"} alt="Image" />
										</a>
									</div>
									<div className="col-md-6">
										<a href={publicUrl + "assets/img/properties/3.jpg"} data-rel="lightcase:myCollection">
											<img className="mb-30" src={publicUrl + "assets/img/properties/3.jpg"} alt="Image" />
										</a>
									</div>
								</div>
							</div>

							<h4 className="title-2">Location</h4>
							<div className="property-details-google-map mb-60">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
							</div>
						</div>
						<a href="#" className="btn theme-btn-1 btn-effect-1 text-uppercase mt-20 mb-80" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
							Направи Запитване
						</a>
					</div>
				</div>
			</div>
		</div>
	}
}

export default ShopDetails