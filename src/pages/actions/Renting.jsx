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

const Renting = (props) => {
    const [selectedProperty, setSelectedProperty] = useState(null);

    const script = useSelector(selectScript);

    const { sendRequest } = useHttpClient()

    const history = useHistory()

    const submitRentingHandler = async (values) => {
        try {
            const responseData = await sendRequest(
                "renting/create-renting",
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
            props.setSuccess({
                heading: script.viewing[17],
                message: script.viewing[18],
            }
            );
            history.push("/");
        } catch (err) { }
    }

    return <div>
        <Navbar />
        <PageHeader headertitle={script.renting[0]} subheader={script.renting[1]} />
        <ServiceDescription content={<Fragment><div className="row">
            <div className="col-lg-12">
                <div className="coll-to-info mb-60 text-center">
                    <h1>{script.renting[2]}</h1>
                </div>
            </div>
        </div>
            <div className='row justify-content-center'>
                <div className='col-lg-2 col-sm-12 col-12 flex-center'>
                    <i className="fa-solid fa-magnifying-glass-location icon"></i>
                    <h5 className="service-description">{script.renting[4]}</h5>
                </div>
                <i className="rotate-arrow flaticon-right-arrow col-1 flex-center" />
                <div className='col-lg-2 col-sm-12 col-12 flex-center'>
                    <i className="fa-solid fa-user icon"></i>
                    <h5 className="service-description">{script.renting[5]}</h5>
                </div>
                <i className="rotate-arrow flaticon-right-arrow col-1 flex-center" />
                <div className='col-lg-2 col-sm-12 col-12 flex-center'>
                    <i className="fa-solid fa-clock icon"></i>
                    <h5 className="service-description">{script.renting[6]} </h5>
                </div>
                <i className="rotate-arrow flaticon-right-arrow col-1 flex-center" />
                <div className='col-lg-2 col-sm-12 col-12 flex-center'>
                    <i className="fa-solid fa-handshake icon"></i>
                    <h5 className="service-description">{script.renting[7]} </h5>
                </div>
            </div>
        </Fragment>} />
        <ProSlider propertyList={script.FOR_RENT} onSubmit={submitRentingHandler} selectedProperty={selectedProperty} setSelectedProperty={setSelectedProperty} />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Renting
