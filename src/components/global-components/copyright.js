import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectScript } from '../../redux/language';

const CopyRight = () => {

	let publicUrl = process.env.PUBLIC_URL + '/'

	const script = useSelector(selectScript);

	return (
		<div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
			<div className="container-fluid ltn__border-top-2">
				<div className="row">
					<div className="col-md-6 col-12">
						<div className="ltn__copyright-design clearfix">
							<p>{script.footer[0]}<span className="current-year" /></p>
						</div>
					</div>
					<div className="col-md-6 col-12 align-self-center">
						<div className="ltn__copyright-menu text-end">
							<ul className="go-top">
								<li><Link to="/terms&policy">{script.footer[1]}</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}



export default CopyRight