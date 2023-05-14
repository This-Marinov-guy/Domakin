import React from 'react';
import Navbar from '../components/global-components/navbar';
import PageHeader from '../components/global-components/page-header';
import Error from '../components/section-components/error';
import CallToActionV1 from '../components/section-components/call-to-action-v1';
import Footer from '../components/global-components/footer';

const ErrorPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="404 Page" />
        <Error />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default ErrorPage

