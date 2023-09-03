import React from 'react';
import Navbar from '../../components/global-components/navbar';
import PageHeader from '../../components/global-components/page-header';
import Footer from '../../components/global-components/footer';
import CallToActionV1 from '../../components/section-components/call-to-action-v1';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';

import AddEmergencyListing from '../../components/section-components/add-emergency-listing';

const EmergencyHousing = () => {
    const script = useSelector(selectScript);

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
