import React from 'react';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from "yup";
import { useHttpClient } from '../../hooks/http-hook'
import Spinner from 'react-bootstrap/Spinner';

const RequestForm = (props) => {
    let publicUrl = process.env.PUBLIC_URL + '/'

    const script = useSelector(selectScript);

    const { loading } = useHttpClient()

    const schema = yup.object().shape({
        name: yup.string().required(script.viewing[16].errors[0]),
        surname: yup.string().required(script.viewing[16].errors[1]),
        phone: yup.string().min(8, script.viewing[16].errors[2]).matches(/^\+/, script.viewing[16].errors[2])
            .required(script.viewing[16].errors[3]),
        email: yup.string().email(script.viewing[16].errors[4]).required(script.viewing[16].errors[5]),
        dataTerms: yup.bool().required().oneOf([true], script.viewing[16].errors[6]),
    });

    return <div className="ltn__appointment-area pb-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Formik className="ltn__appointment-inner" validationSchema={schema} onSubmit={(values) => props.onSubmit(values)} initialValues={{
                        name: "",
                        surname: "",
                        phone: "",
                        email: "",
                        dataTerms: false,
                    }} >
                        {() => (
                            <Form>
                                <h6>{script.viewing[7]}</h6>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <Field type="text" name="name" placeholder={script.viewing[8]} />
                                        </div>
                                        <ErrorMessage
                                            className="error"
                                            name="name"
                                            component="div"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <Field type="text" name="surname" placeholder={script.viewing[9]} />
                                        </div>
                                        <ErrorMessage
                                            className="error"
                                            name="surname"
                                            component="div"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <Field type="text" name="phone" placeholder={script.viewing[10]} />
                                        </div>
                                        <ErrorMessage
                                            className="error"
                                            name="phone"
                                            component="div"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <Field type="text" name="email" placeholder={script.viewing[11]} />
                                        </div>
                                        <ErrorMessage
                                            className="error"
                                            name="email"
                                            component="div"
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <div className="input-item input-item-textarea ltn__custom-icon">
                                            <Field as='textarea' name="description" placeholder={script.viewing[12]} defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-20">
                                        <label className="checkbox-item">{script.viewing[13]}
                                            <Field type="checkbox" name="dataTerms" />
                                            <span className="checkmark" />
                                        </label>
                                        <ErrorMessage
                                            className="error"
                                            name="dataTerms"
                                            component="div"
                                        />
                                    </div>
                                    <div className="btn-wrapper text-center mt-40">
                                        <button disabled={loading} className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">{loading ? <Spinner animation="border" />
                                            : script.viewing[15]}</button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    </div>

}

export default RequestForm