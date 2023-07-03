import React, { Fragment, useState } from 'react';
import Navbar from '../../components/global-components/navbar';
import PageHeader from '../../components/global-components/page-header';
import ProSlider from '../../components/section-components/product-slider-v4';
import Footer from '../../components/global-components/footer';
import ServiceDescription from '../../components/section-components/service-description';
import Success from '../../components/ui/Success';
import CallToActionV1 from '../../components/section-components/call-to-action-v1';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';
import { useHttpClient } from '../../hooks/http-hook';
import { useHistory } from 'react-router-dom';
import AddEmergencyListing from '../../components/section-components/add-emergency-listing';

const EmergencyHousing = (props) => {
    const [selectedWindow, setSelectedWindow] = useState()
    const [selectedProperty, setSelectedProperty] = useState(null);

    const script = useSelector(selectScript);

    const { sendRequest } = useHttpClient()

    const history = useHistory()

    const submitRentingHandler = async (values) => {
        try {
            const responseData = await sendRequest(
                "emergency-renting/create-renting",
                "POST",
                JSON.stringify({
                    property: selectedProperty,
                    name: values.name,
                    surname: values.surname,
                    phone: values.phone,
                    email: values.email,
                    description: values.description
                }),
                {
                    "Content-Type": "application/json",
                }
            );
            props.setSuccess(
                <Success heading={script.viewing[17]} message={script.viewing[18]} onClose={() => { props.setSuccess(null) }} />
            );
            history.push("/");
        } catch (err) { }
    }
    return <div>
        <Navbar />
        <PageHeader headertitle={script.emergency_housing[0]} subheader={script.emergency_housing[0]} />
        <ServiceDescription content={<Fragment><div className="row">
            <div className="col-lg-12">
                <div className="coll-to-info mb-60 text-center">
                    <h1>{script.emergency_housing[1]}</h1>
                </div>
                <div className="col-lg-12 mb-40 plr--5">
                    <h5>{script.emergency_housing[2]}</h5>
                </div>
            </div>
            <div className='row justify-content-center mt-40'>
                <div className='col-lg-2 col-sm-12 col-12 flex-center'>
                    <i className="fa-solid fa-magnifying-glass-location icon"></i>
                    <h5 className="service-description">{script.emergency_housing[3]}</h5>
                </div>
                <i className="rotate-arrow flaticon-right-arrow col-1 flex-center" />
                <div className='col-lg-2 col-sm-12 col-12 flex-center'>
                    <i className="fa-solid fa-user icon"></i>
                    <h5 className="service-description">{script.emergency_housing[4]}</h5>
                </div>
                <i className="rotate-arrow flaticon-right-arrow col-1 flex-center" />
                <div className='col-lg-2 col-sm-12 col-12 flex-center'>
                    <i className="fa-solid fa-clock icon"></i>
                    <h5 className="service-description">{script.emergency_housing[5]} </h5>
                </div>
                <i className="rotate-arrow flaticon-right-arrow col-1 flex-center" />
                <div className='col-lg-2 col-sm-12 col-12 flex-center'>
                    <i className="fa-solid fa-handshake icon"></i>
                    <h5 className="service-description">{script.emergency_housing[6]} </h5>
                </div>
            </div>
        </div>
            <div className="coll-to-info mb-60 text-center">
                <h1>{script.emergency_housing[13]}</h1>
            </div>
            <div className="coll-to-info mb-60 text-center">
                <h1>{script.emergency_housing[7]}</h1>
            </div>
            <div className="row mb-40 plr--5">
                <h5>{script.emergency_housing[8]}</h5>
            </div>

            <div className='row justify-content-center'>
                <div className='col-lg-3 col-md-3 col-sm-12 col-12 flex-center'>
                    <i className="fa-solid fa-user icon"></i>
                    <h5 className="service-description">{script.emergency_housing[9]}</h5>
                </div>
                <i className="rotate-arrow-2 flaticon-right-arrow col-1 flex-center" />
                <div className='col-lg-3 col-md-3 col-sm-12 col-12 flex-center'>
                    <i className="fa-solid fa-clock icon"></i>
                    <h5 className="service-description">{script.emergency_housing[10]}</h5>
                </div>
                <i className="rotate-arrow-2 flaticon-right-arrow col-1 flex-center" />
                <div className='col-lg-3 col-md-3 col-sm-12 col-12 flex-center'>
                    <i className="fa-solid fa-handshake icon"></i>
                    <h5 className="service-description">{script.emergency_housing[11]} </h5>
                </div>
                <div className="col-lg-12">
                    <div className="mt-80 coll-to-info mb-60 text-center">
                        <h5 style={{ fontStyle: 'italic' }}>{script.emergency_housing[12]}</h5>
                    </div>
                </div>
            </div></Fragment>} />
        <div className="row option-btns">
            <div className="col-lg-6 col-md-6 col-sm-12 center">
                <button onClick={() => setSelectedWindow('Searching')} className={(selectedWindow === 'Searching' ? "theme-btn-1" : "theme-btn-2") + " btn btn-effect-1 text-uppercase button-renting"}>
                    {script.emergency_housing[36]}
                </button>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 center">
                <button onClick={() => setSelectedWindow('Offering')} className={(selectedWindow === 'Offering' ? "theme-btn-1" : "theme-btn-2") + " btn btn-effect-1 text-uppercase button-renting"}>
                    {script.emergency_housing[37]}                </button>
            </div>
        </div>

        {selectedWindow === 'Searching' &&
            <ProSlider propertyList={[]} onSubmit={submitRentingHandler} selectedProperty={selectedProperty} setSelectedProperty={setSelectedProperty} />
        }
        {selectedWindow === 'Offering' &&
            <AddEmergencyListing setSuccess={props.setSuccess} />
        }
        <CallToActionV1 />
        <Footer />
    </div>
}

export default EmergencyHousing
