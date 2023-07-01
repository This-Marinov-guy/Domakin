import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from "yup";
import { useHttpClient } from '../../hooks/http-hook'
import Spinner from 'react-bootstrap/Spinner';
import Success from '../ui/Success';
import { useHistory } from 'react-router-dom';

const AddEmergencyListing = (props) => {
    let publicUrl = process.env.PUBLIC_URL + '/'

    const [files, setFiles] = useState([]);
    const [previewUrls, setPreviewUrls] = useState([]);
    const [isValid, setIsValid] = useState(true);

    const history = useHistory()

    const script = useSelector(selectScript)

    const { loading, sendRequest } = useHttpClient()

    useEffect(() => {
        const fileReaders = [];
        files.forEach((file) => {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setPreviewUrls((prevUrls) => [...prevUrls, fileReader.result]);
            };
            fileReaders.push(fileReader);
        });

        files.forEach((file, index) => {
            fileReaders[index].readAsDataURL(file);
        });
    }, [files]);

    const validFileTypes = ["image/jpg", "image/jpeg", "image/png"];

    const inputHandler = (event) => {
        const pickedFiles = Array.from(event.target.files);
        const filteredFiles = pickedFiles.filter((file) =>
            validFileTypes.includes(file.type)
        );

        if (filteredFiles.length > 0) {
            setFiles(filteredFiles);
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    const schema = yup.object().shape({
        name: yup.string().required(script.emergency_housing[35].errors[0]),
        surname: yup.string().required(script.emergency_housing[35].errors[1]),
        email: yup.string().email().required(script.emergency_housing[35].errors[2]),
        phone: yup.string().min(8, script.emergency_housing[35].errors[3]).matches(/^\+/, script.emergency_housing[35].errors[4])
            .required(script.emergency_housing[35].errors[5]),
        ownerDescription: yup.string().required(script.emergency_housing[35].errors[6]),
        location: yup.string().required(script.emergency_housing[35].errors[7]),
        maxPeriod: yup.string().required(script.emergency_housing[35].errors[8]),
        price: yup.string().required(script.emergency_housing[35].errors[9]),
        propertyDescription: yup.string().required(script.emergency_housing[35].errors[10]),
        dataTerms: yup.bool().required(script.emergency_housing[35].errors[11]).oneOf([true], 'Terms must be accepted'),
    });

    return <div className="ltn__appointment-area pb-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Formik className="ltn__appointment-inner"
                        validationSchema={schema}
                        onSubmit={
                            async (values) => {
                                try {
                                    const formData = new FormData();
                                    formData.append('name', values.name)
                                    formData.append('surname', values.surname)
                                    formData.append('email', values.email)
                                    formData.append('phone', values.phone)
                                    formData.append('ownerDescription', values.ownerDescription)
                                    formData.append('location', values.location)
                                    formData.append('maxPeriod', values.maxPeriod)
                                    formData.append('price', values.price)
                                    formData.append('propertyDescription', values.propertyDescription)
                                    files.forEach((file) => {
                                        let fileName = values.name + '_' + values.surname + '_' + values.location + '_' + values.price + '_' + Math.random()
                                        formData.append(`images`, file, fileName);
                                    });

                                    const responseData = await sendRequest(
                                        "emergency-renting/create-lending",
                                        "POST",
                                        formData,
                                    );
                                    props.setSuccess(
                                        <Success heading='Thank you for the property' message='We will soon check your room and post it on the page!' onClose={() => { props.setSuccess(null) }} />
                                    );
                                    history.push("/");
                                } catch (err) { }
                            }
                        }
                        initialValues={{
                            name: '',
                            surname: '',
                            email: '',
                            phone: '',
                            ownerDescription: '',
                            location: '',
                            maxPeriod: '',
                            price: '',
                            propertyDescription: '',
                            dataTerms: false,
                        }} >
                        {() => (
                            <Form encType="multipart/form-data"
                            >
                                <div className='personal-details'>
                                    <h4>{script.emergency_housing[16]}</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-item input-item-name">
                                                <Field type="text" name="name" placeholder={script.emergency_housing[17]} />
                                            </div>
                                            <ErrorMessage
                                                className="error"
                                                name="name"
                                                component="div"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-item input-item-name">
                                                <Field type="text" name="surname" placeholder={script.emergency_housing[18]} />
                                            </div>
                                            <ErrorMessage
                                                className="error"
                                                name="surname"
                                                component="div"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-item input-item-name">
                                                <Field type="text" name="phone" placeholder={script.emergency_housing[19]} />
                                            </div>
                                            <ErrorMessage
                                                className="error"
                                                name="phone"
                                                component="div"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-item input-item-name">
                                                <Field type="email" name="email" placeholder={script.emergency_housing[20]} />
                                            </div>
                                            <ErrorMessage
                                                className="error"
                                                name="email"
                                                component="div"
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input-item input-item-textarea">
                                                <Field as='textarea' name="ownerDescription" placeholder={script.emergency_housing[21]} />
                                                <ErrorMessage
                                                    className="error"
                                                    name="ownerDescription"
                                                    component="div"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-80 room-details'>
                                    <h4>{script.emergency_housing[22]}</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-item input-item-name">
                                                <Field type="text" name="location" placeholder={script.emergency_housing[23]} />
                                            </div>
                                            <ErrorMessage
                                                className="error"
                                                name="location"
                                                component="div"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-item input-item-name">
                                                <Field type="text" name="maxPeriod" placeholder={script.emergency_housing[24]} />
                                            </div>
                                            <ErrorMessage
                                                className="error"
                                                name="maxPeriod"
                                                component="div"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-item input-item-name">
                                                <Field type="text" name="price" placeholder={script.emergency_housing[25]} />
                                            </div>
                                            <p className='correct'>{script.emergency_housing[26]}</p>
                                            <ErrorMessage
                                                className="error"
                                                name="price"
                                                component="div"
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input-item input-item-textarea">
                                                <Field as='textarea' name="propertyDescription" placeholder={script.emergency_housing[27]} />
                                                <ErrorMessage
                                                    className="error"
                                                    name="propertyDescription"
                                                    component="div"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-20">
                                            <label className="checkbox-item">{script.emergency_housing[28]}
                                                <Field type="checkbox" name="dataTerms" />
                                                <span className="checkmark" />
                                            </label>
                                            <ErrorMessage
                                                className="error"
                                                name="dataTerms"
                                                component="div"
                                            />
                                        </div>
                                        <div className="col-md-12 mt-40 mb-20">
                                            <div className="input-item input-item-textarea">
                                            <h4>{script.emergency_housing[29]}</h4>
                                                <div className='row'>
                                                    <div className='col-lg-6 col-sm-12 col-sm-12'>
                                                        <input type="file" id="myFile" name="filename" multiple onInput={inputHandler}
                                                            className="btn theme-btn-3 mb-10" /><br />
                                                        <p>
                                                            <small>{script.emergency_housing[30]}</small><br />
                                                            <small>{script.emergency_housing[31]}</small><br />
                                                            <small>{script.emergency_housing[32]}</small><br />
                                                        </p>
                                                        {!isValid && (
                                                            <p style={{ color: "red" }}>{script.emergency_housing[35].errors[12]}</p>
                                                        )}
                                                    </div>
                                                    <div className='input-pictures col-lg-6 col-sm-12 col-sm-12'>
                                                        <div className='row'>
                                                            {previewUrls.map((url, index) => (
                                                                <div key={index} className='preview-container col-lg-3 col-md-3 col-4'>
                                                                    <img className='preview-small' src={url} alt="Preview" />
                                                                </div>
                                                            ))}                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-wrapper text-center mt-40">
                                            <button disabled={loading || files.length === 0 || !isValid} className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">{loading ? <Spinner animation="border" />
                                                : script.emergency_housing[33]}</button>
                                            {files.length === 0 && <p><small>{script.emergency_housing[33]}</small></p>}
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    </div >

}

export default AddEmergencyListing