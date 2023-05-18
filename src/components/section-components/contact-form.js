import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';

const ContactForm = () => {

	let publicUrl = process.env.REACT_APP_PUBLIC_URL + '/'

	const [result, showresult] = useState(null);

	const script = useSelector(selectScript)
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE,
				process.env.REACT_APP_TEMPLATE,
				e.target,
				process.env.REACT_APP_PUBLIC_KEY
			)
			.then(
				(result) => {
					showresult(<p style={{ color: 'green' }} className='mt-20'>{script.contact[7]}</p>);
				},
				(error) => {
					console.log(error.text);
					showresult(<p style={{ color: 'red' }} className='mt-20'>{script.contact[8]}</p>);
				}
			);
	}

	setTimeout(() => {
		showresult(null);
	}, 5000);

	return <div className="ltn__contact-message-area mb-120">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="ltn__form-box contact-form-box box-shadow white-bg">
						<h4 className="title-2">{script.contact[9]}</h4>
						<form id="contact-form" action='' onSubmit={sendEmail}>
							<div className="row">
								<div className="col-md-6">
									<div className="input-item input-item-email ltn__custom-icon">
										<input type="email" name="email" placeholder={script.contact[10]} />
									</div>
								</div>
								<div className="col-md-6">
									<div className="input-item input-item-name">
										<input type="text" name="subject" placeholder={script.contact[11]} />
									</div>
								</div>
							</div>
							<div className="input-item input-item-textarea ltn__custom-icon">
								<textarea name="message" placeholder={script.contact[12]} defaultValue={""} />
							</div>
							<div className="btn-wrapper mt-0">
								<button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">{script.contact[13]}</button>
							</div>
							{result}
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
}


export default ContactForm