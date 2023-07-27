import React from 'react';
import Navbar from '../../components/global-components/navbar';
import PageHeader from '../../components/global-components/page-header';
import RecommendedSources from '../../components/section-components/recommended-sources';
import Footer from '../../components/global-components/footer';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';
import CallToActionV1 from '../../components/section-components/call-to-action-v1';


const Recommendations = () => {

    const script = useSelector(selectScript)
    return <div>
        <Navbar />
        <PageHeader headertitle={script.recommendations[0]} subheader={script.recommendations[1]} />
        <RecommendedSources />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Recommendations

