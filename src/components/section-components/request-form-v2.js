import React from 'react';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from "yup";
import { useHttpClient } from '../../hooks/http-hook'
import { ProgressSpinner } from 'primereact/progressspinner';

const RequestFormV2 = (props) => {
    let publicUrl = process.env.PUBLIC_URL + '/'

    const script = useSelector(selectScript);
    const { loading } = useHttpClient()

    const schema = yup.object().shape({
        name: yup.string().required(script.viewing[16].errors[0]),
        surname: yup.string().required(script.viewing[16].errors[1]),
        phone: yup.string().min(8, script.viewing[16].errors[2]).matches(/^\+/, script.viewing[16].errors[2])
            .required(script.viewing[16].errors[3]),
        email: yup.string().email(script.viewing[16].errors[4]).required(script.viewing[16].errors[5]),
        city: yup.string().required(script.viewing[16].errors[7]),
        address: yup.string(),
        date: yup.string().required(script.viewing[16].errors[8]),
        time: yup.string().required(script.viewing[16].errors[9]),
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
                        city: '',
                        address: '',
                        date: '',
                        time: '',
                        dataTerms: false,
                    }} >
                        {() => (
                            <Form>
                                <h4>{script.viewing[8]}</h4>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <Field type="text" name="name" placeholder={script.viewing[9]} />
                                        </div>
                                        <ErrorMessage
                                            className="error"
                                            name="name"
                                            component="div"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <Field type="text" name="surname" placeholder={script.viewing[10]} />
                                        </div>
                                        <ErrorMessage
                                            className="error"
                                            name="surname"
                                            component="div"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <Field type="text" name="phone" placeholder={script.viewing[11]} />
                                        </div>
                                        <ErrorMessage
                                            className="error"
                                            name="phone"
                                            component="div"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <Field type="text" name="email" placeholder={script.viewing[12]} />
                                        </div>
                                        <ErrorMessage
                                            className="error"
                                            name="email"
                                            component="div"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-city ltn__custom-icon">
                                            <Field type="text" name="city" placeholder={script.viewing[19]} />
                                        </div>
                                        <ErrorMessage
                                            className="error"
                                            name="city"
                                            component="div"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-city ltn__custom-icon">
                                            <Field type="text" name="address" placeholder={script.viewing[22]} />
                                        </div>
                                        <ErrorMessage
                                            className="error"
                                            name="address"
                                            component="div"
                                        />
                                    </div>

                                    <div className="col-md-8 mb-20">
                                        <div className='row'>

                                            <div className="col-md-6 ltn__page-details-inner mb-20">
                                                <div className='input-with-label'>
                                                    <label>{script.viewing[20]}</label>
                                                    <div className="input-item input-item-name product-meta-date">
                                                        <Field type="date" name="date" />
                                                    </div>
                                                </div>
                                                <ErrorMessage
                                                    className="error"
                                                    name="date"
                                                    component="div"
                                                />
                                            </div>

                                            <div className="col-md-6 ltn__page-details-inner">
                                                <div className='input-with-label'>
                                                    <label>{script.viewing[21]}</label>
                                                    <div className="input-item input-item-name product-meta-date">
                                                        <Field type="time" name="time" />
                                                    </div>
                                                </div>
                                                <ErrorMessage
                                                    className="error"
                                                    name="time"
                                                    component="div"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="input-item input-item-textarea ltn__custom-icon">
                                            <Field as='textarea' name="description" placeholder={script.viewing[13]} defaultValue={""} />
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
                                    <div className="btn-wrapper text-center mt-40">
                                        <button disabled={loading} className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">{loading ? <ProgressSpinner style={{ width: '30px', height: '30px' }} />


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

export default RequestFormV2