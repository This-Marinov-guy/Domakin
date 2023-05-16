import React from 'react';
import Navbar from '../../components/global-components/navbar';
import PageHeader from '../../components/global-components/page-header';
import AddListing from '../../components/section-components/add-listing';
import CallToActionV1 from '../../components/section-components/call-to-action-v1';
import Footer from '../../components/global-components/footer';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';

const Lending = () => {
    const script = useSelector(selectScript)

    return <div>
        <Navbar />
        <PageHeader headertitle={script.addDocument[0]} subheader={script.addDocument[1]}/>
        <AddListing />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Lending

