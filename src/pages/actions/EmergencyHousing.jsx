import React, { Fragment, useState } from 'react';
import Navbar from '../../components/global-components/navbar';
import PageHeader from '../../components/global-components/page-header';
import ProSlider from '../../components/section-components/product-slider-v3';
import Footer from '../../components/global-components/footer';
import ServiceDescription from '../../components/section-components/service-description';
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
                {
                    heading: script.viewing[17],
                    message: script.viewing[18]
                }
            );
            history.push("/");
        } catch (err) { }
    }
    return <div>
        <Navbar />
        <PageHeader headertitle={script.emergency_housing[0]} subheader={script.emergency_housing[0]} />
        <div className="row option-btns pb-50">
            <div className="col-lg-6 col-md-6 col-sm-12 center">
                <a href='/services/emergency-housing/properties' className="theme-btn-2 btn btn-effect-1 text-uppercase button-renting">
                    {script.emergency_housing[36]}
                </a>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 center">
                <a href='/services/emergency-housing/add-listing' className="theme-btn-2 btn btn-effect-1 text-uppercase button-renting">
                    {script.emergency_housing[37]}                </a>
            </div>
        </div>

        <CallToActionV1 />
        <Footer />
    </div>
}

export default EmergencyHousing
