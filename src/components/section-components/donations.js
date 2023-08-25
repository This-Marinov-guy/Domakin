import React, { useState } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useSelector } from 'react-redux'
import { selectScript } from '../../redux/language'
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from "yup";
import { useHttpClient } from '../../hooks/http-hook'


const Donations = () => {
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const script = useSelector(selectScript)

    const { sendRequest } = useHttpClient()

    const schema = yup.object().shape({
        name: yup.string().required(script.feedbacks[8]),
        amount: yup.string().required(script.feedbacks[9]).min(20, script.feedbacks[10]).max(300, script.feedbacks[11]),
        message: yup.string().max(300, script.feedbacks[11]),
        terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
    });

    return <div className='container mt-40 mb-120'>
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2--- text-center">
                    <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">{script.feedbacks[1]}</h6>
                    <h1 className="section-title">{script.feedbacks[13]}</h1>
                </div>
            </div>
        </div>
        <Formik className="ltn__appointment-inner" validationSchema={schema} onSubmit={async (values, { resetForm }) => {
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
                    <h4>{script.feedbacks[3]}</h4>
                    <div className="row">
                        <div className="col-6">
                            <div className="input-item input-item-name ltn__custom-icon">
                                <Field type="text" name="name" placeholder={script.feedbacks[4]} />
                            </div>
                            <ErrorMessage
                                className="error"
                                name="name"
                                component="div"
                            />
                        </div>
                        <div className="col-6">
                        <div className="input-item input-item-name ltn__custom-icon">
                                <Field type="text" name="Amount" placeholder={script.feedbacks[4]} />
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
                        <div className="col-md-12 mb-20">
                            <label className="checkbox-item">{script.viewing[14]}
                                <Field type="checkbox" name="dataTerms" />
                                <span className="checkmark" />
                            </label>
                            <ErrorMessage
                                className="error"
                                name="dataTerms"
                                component="div"
                            />
                        </div>

                        <div className="btn-wrapper text-center">
                            <button disabled={loading} className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">{loading ?            <ProgressSpinner style={{ width: '30px', height: '30px' }} />

                                : script.feedbacks[7]}</button>
                            {success && <p style={{ color: '#10a551', marginTop: '5px' }}>{script.feedbacks[12]}</p>}
                        </div>
                    </div>
                </Form>
            )}
        </Formik>    </div>
}


export default Donations 