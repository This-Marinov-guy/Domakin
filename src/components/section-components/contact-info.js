import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';

const ContactInfo = () => {

	let publicUrl = process.env.PUBLIC_URL + '/'

	const script = useSelector(selectScript)
	 
	return <div className="ltn__contact-address-area mb-90">
		<div className="container">
			<div className="row">
				<div style={{margin:"auto"}} className="col-lg-4">
					<div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
						<div className="ltn__contact-address-icon">
							<img src={publicUrl + "assets/img/icons/10.png"} alt="Icon Image" />
						</div>
						<h3>{script.contact[2]}</h3>
						<p>domakin.nl@gmail.com</p>
					</div>
				</div>
				{/* <div className="col-lg-4">
					<div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
						<div className="ltn__contact-address-icon">
							<img src={publicUrl + "assets/img/icons/11.png"} alt="Icon Image" />
						</div>
						<h3>{script.contact[3]}</h3>
						<p>{script.contact[4]}</p>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
						<div className="ltn__contact-address-icon">
							<img src={publicUrl + "assets/img/icons/12.png"} alt="Icon Image" />
						</div>
						<h3>{script.contact[5]}</h3>
						<p>{script.contact[6]}</p>
					</div>
				</div> */}
			</div>
		</div>
	</div>
}


export default ContactInfo