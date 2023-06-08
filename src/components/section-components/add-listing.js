import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from "yup";
import { useHttpClient } from '../../hooks/http-hook'
import Spinner from 'react-bootstrap/Spinner';
import Success from '../ui/Success';
import { useHistory } from 'react-router-dom';

const AddListing = (props) => {
    let publicUrl = process.env.PUBLIC_URL + '/'

    const [files, setFiles] = useState([]);
    const [previewUrls, setPreviewUrls] = useState([]);
    const [isValid, setIsValid] = useState(true);

    const script = useSelector(selectScript);

    const history = useHistory()

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
        name: yup.string().required(),
        surname: yup.string().required(),
        email: yup.string().email().required(),
        phone: yup.string().min(8, 'Invalid phone').matches(/^\+/, 'invalid phone (please check there is + and the country code)')
            .required(),
        location: yup.string().required(),
        size: yup.string().required(),
        period: yup.string().required(),
        rent: yup.string().required(),
        registration: yup.string().required(),
        description: yup.string().required(),
        dataTerms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
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
                                    formData.append('location', values.location)
                                    formData.append('size', values.size)
                                    formData.append('period', values.period)
                                    formData.append('rent', values.rent)
                                    formData.append('registration', values.registration)
                                    formData.append('description', values.description)
                                    files.forEach((file, index) => {
                                        formData.append(`images${index}`, file);
                                    });

                                    const responseData = await sendRequest(
                                        "lending/create-lending-international",
                                        "POST",
                                        formData,
                                    );
                                    // props.setSuccess(
                                    //     <Success heading='Thank you for the property' message='We will soon check your room and contact you to advance with the deal!' onClose={() => { props.setSuccess(null) }} />
                                    // );
                                    // history.push("/");
                                } catch (err) { }
                            }
                        }
                        initialValues={{
                            name: '',
                            surname: '',
                            email: '',
                            phone: '',
                            location: '',
                            size: '',
                            period: '',
                            rent: '',
                            registration: '',
                            description: '',
                            dataTerms: false,
                        }} >
                        {() => (
                            <Form encType="multipart/form-data"
                            >
                                <div className='personal-details'>
                                    <h4>Personal Information</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-item input-item-name">
                                                <Field type="text" name="name" placeholder='Name' />
                                            </div>
                                            <ErrorMessage
                                                className="error"
                                                name="name"
                                                component="div"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-item input-item-name">
                                                <Field type="text" name="surname" placeholder='Surname' />
                                            </div>
                                            <ErrorMessage
                                                className="error"
                                                name="surname"
                                                component="div"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-item input-item-name">
                                                <Field type="text" name="phone" placeholder='Phone (+ and country code)' />
                                            </div>
                                            <ErrorMessage
                                                className="error"
                                                name="phone"
                                                component="div"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-item input-item-name">
                                                <Field type="email" name="email" placeholder='Email' />
                                            </div>
                                            <ErrorMessage
                                                className="error"
                                                name="email"
                                                component="div"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-80 room-details'>
                                    <h4>Room Details</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-item input-item-name">
                                                <Field type="text" name="location" placeholder='Location' />
                                            </div>
                                            <ErrorMessage
                                                className="error"
                                                name="location"
                                                component="div"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-item input-item-name">
                                                <Field type="text" name="size" placeholder='Size of the room' />
                                            </div>
                                            <ErrorMessage
                                                className="error"
                                                name="size"
                                                component="div"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-item input-item-name">
                                                <Field type="text" name="period" placeholder='Period of availability' />
                                            </div>
                                            <ErrorMessage
                                                className="error"
                                                name="period"
                                                component="div"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-item input-item-name">
                                                <Field type="text" name="rent" placeholder='Rent (what is included)' />
                                            </div>
                                            <ErrorMessage
                                                className="error"
                                                name="rent"
                                                component="div"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-item input-item-name">
                                                <Field type="text" name="registration" placeholder='Is address registration possible?' />
                                            </div>
                                            <ErrorMessage
                                                className="error"
                                                name="registration"
                                                component="div"
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input-item input-item-textarea">
                                                <Field as='textarea' name="description" placeholder='Description of the room and the apartment (incl. shared facilities and number of tenants)' defaultValue={""} />
                                                <ErrorMessage
                                                    className="error"
                                                    name="description"
                                                    component="div"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-20">
                                            <label className="checkbox-item">I give my permission to be contacted by the organization for the purposes of the service
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
                                                <h4>Room Pictures</h4>
                                                <div className='row'>
                                                    <div className='col-lg-6 col-sm-12 col-sm-12'>
                                                        <input type="file" id="myFile" name="filename" multiple onInput={inputHandler}
                                                            className="btn theme-btn-3 mb-10" /><br />
                                                        <p>
                                                            <small>* At least 1 image is required.</small><br />
                                                            <small>* Supported formats are jpg, jpeg and png</small><br />
                                                        </p>
                                                        {!isValid && (
                                                            <p style={{ color: "red" }}>The file is not supported, please try again</p>
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
                                                : 'send room'}</button>
                                            {files.length === 0 && <p><small>* Waiting for images</small></p>}
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

export default AddListing