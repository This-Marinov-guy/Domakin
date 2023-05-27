import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const PropertyItem = () => {
	let publicUrl = process.env.PUBLIC_URL + '/'

	return (
		<Fragment>
			<div className="col-xl-4 col-sm-6 col-12">
				<div className="ltn__product-item ltn__product-item-4 text-center---">
					<div className="product-img go-top">
						<Link to="/product-details"><img src={publicUrl + "assets/img/product-3/3.jpg"} alt="#" /></Link>
						<div className="product-badge">
							<ul>
								<li className="sale-badge bg-green">Наемане</li>
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
										<Link to="/product-details"><i className="fas fa-camera" /> 4</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="product-info">
						<div className="product-price">
							<span>&euro;600<label>/Month</label></span>
						</div>
						<h2 className="product-title go-top"><Link to="/product-details">Единична стая</Link></h2>
						<div className="product-description">
							<p>Beautiful Huge 1 Family House In Heart Of <br />
								Westbury. Newly Renovated With New Wood</p>
						</div>
					</div>
					<div className="product-info-bottom">
						<div className="real-estate-agent">
							<div className="agent-img go-top">
								<Link to="/team-details"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
							</div>
							<div className="agent-brief go-top">
								<h6><Link to="/team-details">Лазар Попов</Link></h6>
								<small>Агент</small>
							</div>
						</div>
						<div className="product-hover-action">

							<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
								Контакти
							</a>

						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

const PropertyWindow = () => {
	let publicUrl = process.env.PUBLIC_URL + '/'

	return <div className="ltn__modal-area ltn__quick-view-modal-area">
		<div className="modal fade" id="quick_view_modal" tabIndex={-1}>
			<div className="modal-dialog modal-lg" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
							{/* <i class="fas fa-times"></i> */}
						</button>
					</div>
					<div className="modal-body">
						<div className="ltn__quick-view-modal-inner">
							<div className="modal-product-item">
								<div className="row">
									<div className="col-lg-6 col-12">
										<div className="modal-product-img">
											<img src={publicUrl + "assets/img/product/4.png"} alt="#" />
										</div>
									</div>
									<div className="col-lg-6 col-12">
										<div className="modal-product-info">
											<div className="product-ratting">
												<ul>
													<li><a href="#"><i className="fas fa-star" /></a></li>
													<li><a href="#"><i className="fas fa-star" /></a></li>
													<li><a href="#"><i className="fas fa-star" /></a></li>
													<li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
													<li><a href="#"><i className="far fa-star" /></a></li>
													<li className="review-total"> <a href="#"> ( 95 Reviews )</a></li>
												</ul>
											</div>
											<h3>Brake Conversion Kit</h3>
											<div className="product-price">
												<span>$149.00</span>
												<del>$165.00</del>
											</div>
											<div className="modal-product-meta ltn__product-details-menu-1">
												<ul>
													<li>
														<strong>Categories:</strong>
														<span className="go-top">
															<Link to="/blog">Parts</Link>
															<Link to="/blog">Car</Link>
															<Link to="/blog">Seat</Link>
															<Link to="/blog">Cover</Link>
														</span>
													</li>
												</ul>
											</div>
											<div className="ltn__product-details-menu-2">
												<ul>
													<li>
														<div className="cart-plus-minus">
															<input type="text" defaultValue="02" name="qtybutton" className="cart-plus-minus-box" />
														</div>
													</li>
													<li>
														<a href="#" className="theme-btn-1 btn btn-effect-1" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
															<i className="fas fa-shopping-cart" />
															<span>ADD TO CART</span>
														</a>
													</li>
												</ul>
											</div>
											<hr />
											<div className="ltn__social-media">
												<ul>
													<li>Share:</li>
													<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
													<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
													<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
													<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
												</ul>
											</div>
										</div>
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

const ProductSliderV4 = () => {

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
				<PropertyItem />
				<PropertyItem />

			</div>
			{/* <PropertyWindow /> */}
		</div>
	</div>

}


export default ProductSliderV4