import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from "yup";
import { useHttpClient } from '../../hooks/http-hook'
import Spinner from 'react-bootstrap/Spinner';

const CreateFeedback = () => {
    let publicUrl = process.env.PUBLIC_URL + '/'

    const [success, setSuccess] = useState(false)

    const script = useSelector(selectScript);

    const { loading, sendRequest } = useHttpClient()

    const schema = yup.object().shape({
        name: yup.string().required(script.viewing[17].errors[0]),
        feedback: yup.string().required().min(20, 'Text must have a minimum of 20 characters').max(300, 'Text can have a maximum of 300 characters'),
    });


    return (<div className="ltn__appointment-area pb-120">
        <div style={{ padding: '0 15%' }} className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Formik className="ltn__appointment-inner" validationSchema={schema} onSubmit={async (values) => {
                        try {
                            const responseData = await sendRequest(
                                "feedback/create-feedback",
                                "POST",
                                JSON.stringify({
                                    name: values.name,
                                    feedback: values.feedback
                                }),
                                {
                                    "Content-Type": "application/json",
                                }
                            );

                        } catch (err) { }
                    }} initialValues={{
                        name: "",
                        surname: "",
                        phone: "",
                        email: "",
                        dataTerms: false,
                    }} >
                        {(formikProps) => (
                            <Form>
                                <h4 className='text-center mt-40 mb-40'><i className="fa-solid fa-ellipsis"></i></h4>
                                <h4>Add your feedback</h4>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <Field type="text" name="name" placeholder={script.viewing[9]} />
                                        </div>
                                        <ErrorMessage
                                            className="error"
                                            name="name"
                                            component="div"
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <div className="input-item input-item-textarea ltn__custom-icon">
                                            <Field
                                                as="textarea"
                                                name="feedback"
                                                placeholder={script.viewing[13]}
                                                defaultValue={""}
                                                onKeyUp={(event) =>
                                                    formikProps.setFieldValue("feedback", event.target.value)
                                                }
                                            />
                                            <p style={{ position: 'absolute', bottom: '20px', right: '10px', fontSize: '15px' }}>
                                               {formikProps.values.feedback ? `${formikProps.values.feedback.length}/300` : `At least 20 characters`}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="btn-wrapper">
                                        <button disabled={loading} className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">{loading ? <Spinner animation="border" />
                                            : script.viewing[16]}</button>
                                        {!success && <p style={{ color: '#10a551', marginTop: '5px' }}>Thank you - your feedback has been sent for approval!</p>}
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    </div>

    )
}

export default CreateFeedback