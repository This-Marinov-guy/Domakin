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
					showresult(<p style={{ color: 'green' }} className='mt-20'>Съобщението е изпратено успешно!</p>);
				},
				(error) => {
					console.log(error.text);
					showresult(<p style={{ color: 'red' }} className='mt-20'>Грешка! Моля опитайте пак!</p>);
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
						<h4 className="title-2">Свържете се директно с нас</h4>
						<form id="contact-form" action='' onSubmit={sendEmail}>
							<div className="row">
								<div className="col-md-6">
									<div className="input-item input-item-email ltn__custom-icon">
										<input type="email" name="email" placeholder="Въведете вашия имейл" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="input-item input-item-name">
										<input type="text" name="subject" placeholder="Въведете тема на запитване" />
									</div>
								</div>
							</div>
							<div className="input-item input-item-textarea ltn__custom-icon">
								<textarea name="message" placeholder="Въведете вашето запитване" defaultValue={""} />
							</div>
							<div className="btn-wrapper mt-0">
								<button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Изпрати запитване</button>
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