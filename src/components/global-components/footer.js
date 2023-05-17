import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';

const Footer_v1 = () => {

	let publicUrl = process.env.PUBLIC_URL + '/'
	let imgattr = "Footer logo"

	const script = useSelector(selectScript);

	useEffect(() => {
		const $ = window.$;

		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);

		$('.go-top').find('a').on('click', function () {

			$(".quarter-overlay").fadeIn(1);

			$(window).scrollTop(0);

			setTimeout(function () {
				$(".quarter-overlay").fadeOut(300);
			}, 800);

		});


		$(document).on('click', '.theme-btn-1 ', function () {
			$('div').removeClass('modal-backdrop');
			$('div').removeClass('show');
			$('div').removeClass('fade');
			$('body').attr("style", "");
		});
	}, [])
	return (
		<footer className="ltn__footer-area  ">
			<div className="footer-top-area  section-bg-2 plr--5">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-3 col-md-6 col-sm-6 col-12">
							<div className="footer-widget footer-about-widget">
								<div className="footer-logo">
									<div className="site-logo">
										<img src={publicUrl + "assets/img/logo-2.png"} alt="Logo" />
									</div>
								</div>
								<div className="footer-address">
									<ul>
										<li>
											<div className="footer-address-icon">
												<i className="icon-placeholder" />
											</div>
											<div className="footer-address-info">
												<p>{script.footer[2]}</p>
											</div>
										</li>
										{/* <li>
											<div className="footer-address-icon">
												<i className="icon-call" />
											</div>
											<div className="footer-address-info">
												<p><a href="tel:+0123-456789">+0123-456789</a></p>
											</div>
										</li> */}
										<li>
											<div className="footer-address-icon">
												<i className="icon-mail" />
											</div>
											<div className="footer-address-info">
												<p><a href="mailto:domakin.nl@gmail.com">domakin.nl@gmail.com</a></p>
											</div>
										</li>
									</ul>
								</div>
								<div className="ltn__social-media mt-20">
									<Social />
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-md-6 col-sm-6 col-12">
							<div className="footer-widget footer-menu-widget clearfix">
								<h4 className="footer-title">{script.footer[3]}</h4>
								<div className="footer-menu go-top">
									<ul>
										<li><Link to="/about">{script.footer[4]}</Link></li>

										<li><Link to="/agents">{script.footer[5]}</Link></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-md-6 col-sm-6 col-12">
							<div className="footer-widget footer-menu-widget clearfix">
								<h4 className="footer-title">{script.footer[6]}</h4>
								<div className="footer-menu go-top">
									<ul>
										<li><Link to="/viewing">{script.footer[7]}</Link></li>
										<li><p>{script.footer[8]}</p></li>

									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-md-6 col-sm-6 col-12">
							<div className="footer-widget footer-menu-widget clearfix">
								<h4 className="footer-title">{script.footer[9]}</h4>
								<div className="footer-menu go-top">
									<ul>
										<li><Link to="/contact">{script.footer[10]}</Link></li>
									</ul>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
			<Copyright />
		</footer>
	)
}



export default Footer_v1