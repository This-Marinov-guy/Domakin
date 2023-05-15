import React, { useState } from 'react';
import emailjs from "emailjs-com";

const ContactForm = () => {

	let publicUrl = process.env.REACT_APP_PUBLIC_URL + '/'

	const [result, showresult] = useState(null);

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_re29ygo",
				"template_4cm0x98",
				e.target,
				"QucH6qLcnRkKDOTlW"
			)
			.then(
				(result) => {
					showresult(<p style={{ color: 'green' }} className='mt-20'>Your message was successfully received!</p>);
				},
				(error) => {
					showresult(<p style={{ color: 'red' }} className='mt-20'>{error.text}</p>);
				}
			);
	}

	setTimeout(() => {
		showresult(null);
	}, 5000);

	return <div className="ltn__contact-message-area mb-120 mb--100">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="ltn__form-box contact-form-box box-shadow white-bg">
						<h4 className="title-2">Contact us directly</h4>
						<form id="contact-form" action='' onSubmit={sendEmail}>
							<div className="row">
								<div className="col-md-6">
									<div className="input-item input-item-email ltn__custom-icon">
										<input type="email" name="email" placeholder="Enter email address" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="input-item input-item-name">
										<input type="text" name="subject" placeholder="Enter the subject" />
									</div>
								</div>
							</div>
							<div className="input-item input-item-textarea ltn__custom-icon">
								<textarea name="message" placeholder="Enter message" defaultValue={""} />
							</div>
							<div className="btn-wrapper mt-0">
								<button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">send message</button>
							</div>
							{result}
							<p className="form-messege mb-0 mt-20" />
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
}


export default ContactForm