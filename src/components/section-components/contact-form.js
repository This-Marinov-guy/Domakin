import React, { useRef } from 'react';
import emailjs from "emailjs-com";
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';
import { Toast } from 'primereact/toast';

const ContactForm = () => {

	let publicUrl = process.env.REACT_APP_PUBLIC_URL + '/'

	const toast = useRef(null)

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
				() => {
					toast.current.show({ severity: 'success', summary: script.viewing[17], detail: script.contact[7], life: 10000 });
				},
				() => {
					toast.current.show({ severity: 'error', summary: script.error[0], detail: script.contact[8], life: 10000 });
				}
			).catch((error) => {
				toast.current.show({ severity: 'error', summary: script.error[0], detail: error, life: 10000 });

			});
	}

	return <div className="ltn__contact-message-area mb-120">
		<Toast ref={toast} />
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
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
}


export default ContactForm