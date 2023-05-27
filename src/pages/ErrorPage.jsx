import React from 'react';
import Navbar from '../components/global-components/navbar';
import PageHeader from '../components/global-components/page-header';
import Error from '../components/section-components/error';
import Footer from '../components/global-components/footer';
import { useSelector } from 'react-redux';
import { selectScript } from '../redux/language';

const ErrorPage = () => {
    const script = useSelector(selectScript);

    return <div>
        <Navbar />
        <Error />
        <Footer />
    </div>
}

export default ErrorPage

