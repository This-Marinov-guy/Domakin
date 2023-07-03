import React from 'react';
import Navbar from '../../components/global-components/navbar';
import PageHeader from '../../components/global-components/page-header';
import ContactInfo from '../../components/section-components/contact-info';
import ContactForm from '../../components/section-components/contact-form';
import Map from '../../components/section-components/map';
import CallToActionV1 from '../../components/section-components/call-to-action-v1';
import Footer from '../../components/global-components/footer';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';

const Contact = () => {
    const script = useSelector(selectScript)

    return <div>
        <Navbar />
        <PageHeader headertitle={script.contact[0]} subheader={script.contact[1]} />
        <ContactInfo />
        <ContactForm />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Contact

