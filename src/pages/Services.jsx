import React from 'react';
import Navbar from '../components/global-components/navbar';
import PageHeader from '../components/global-components/page-header';
import Features from '../components/section-components/features-v1';
import Footer from '../components/global-components/footer';
import CallToActionV1 from '../components/section-components/call-to-action-v1';
import { useSelector } from 'react-redux';
import { selectScript } from '../redux/language';

const Services = () => {
    const script = useSelector(selectScript);

    return <div>
        <Navbar />
        <PageHeader headertitle={script.features[8]} subheader={script.features[1]} />
        <Features customClass="ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---" />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Services

