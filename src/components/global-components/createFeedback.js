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
    const [loading, setLoading] = useState(false)

    const script = useSelector(selectScript);

    const { sendRequest } = useHttpClient()

    const schema = yup.object().shape({
        name: yup.string().required(script.feedbacks[8]),
        feedback: yup.string().required(script.feedbacks[9]).min(20, script.feedbacks[10]).max(300, script.feedbacks[11]),
    });


    return (<div className="ltn__appointment-area pb-120">
        <div style={{ padding: '0 15%' }} className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Formik className="ltn__appointment-inner" validationSchema={schema} onSubmit={async (values , {resetForm}) => {
                        try {
                            setLoading(true)
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
                            setLoading(false)
                            setSuccess(true)
                            resetForm();
                        } catch (err) { }
                    }} initialValues={{
                        name: "",
                    }} >
                        {(formikProps) => (
                            <Form>
                                <h4 className='text-center mt-40 mb-40'><i className="fa-solid fa-ellipsis"></i></h4>
                                <h4>{script.feedbacks[3]}</h4>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <Field type="text" name="name" placeholder={script.feedbacks[4]} />
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
                                                placeholder={script.feedbacks[5]}
                                                defaultValue={""}
                                                onKeyUp={(event) =>
                                                    formikProps.setFieldValue("feedback", event.target.value)
                                                }
                                            />
                                            <p style={{ position: 'absolute', bottom: '20px', right: '10px', fontSize: '15px' }}>
                                                {formikProps.values.feedback ? `${formikProps.values.feedback.length}/300` : script.feedbacks[6]}
                                            </p>
                                            <ErrorMessage
                                                className="error"
                                                name="feedback"
                                                component="div"
                                            />
                                        </div>
                                    </div>

                                    <div className="btn-wrapper text-center">
                                        <button disabled={loading} className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">{loading ? <Spinner animation="border" />
                                            : script.feedbacks[7]}</button>
                                        {success && <p style={{ color: '#10a551', marginTop: '5px' }}>{script.feedbacks[12]}</p>}
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