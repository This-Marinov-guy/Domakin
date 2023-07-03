import React from 'react';
import Navbar from '../../components/global-components/navbar';
import PageHeader from '../../components/global-components/page-header';
import AboutV4 from '../../components/section-components/about-v4';
import Features from '../../components/section-components/features-v1';
import Team from '../../components/section-components/team-v1';
import Footer from '../../components/global-components/footer';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';
import CallToActionV1 from '../../components/section-components/call-to-action-v1';


const About = () => {
    
    const script = useSelector(selectScript)
    return <div>
        <Navbar />
        <PageHeader headertitle={script.about[0]} subheader={script.about[1]} />
        <AboutV4 />
        <Features customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---" />
        <Team />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default About

