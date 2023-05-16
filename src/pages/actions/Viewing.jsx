import React from 'react';
import Navbar from '../../components/global-components/navbar';
import PageHeader from '../../components/global-components/page-header';
import ViewingForm from '../../components/section-components/viewing-form';
import Footer from '../../components/global-components/footer';
import ServiceDescription from '../../components/section-components/service-description';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';

const Viewing = () => {
    const script = useSelector(selectScript);

    return <div>
        <Navbar />
        <PageHeader headertitle={script.viewing[0]} subtitle={script.viewing[1]} />
        <ServiceDescription />
        <ViewingForm />
        <Footer />
    </div>
}

export default Viewing
