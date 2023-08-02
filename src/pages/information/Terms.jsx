import React from 'react';
import Navbar from '../../components/global-components/navbar';
import PageHeader from '../../components/global-components/page-header';
import Footer from '../../components/global-components/footer';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';
import CallToActionV1 from '../../components/section-components/call-to-action-v1';
import Terms from '../../components/section-components/terms';


const About = () => {

    const script = useSelector(selectScript)
    return <div>
        <Navbar />
        <PageHeader headertitle={script.about[0]} subheader={script.about[1]} />
        <Terms />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default About

