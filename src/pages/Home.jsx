import React from 'react';
import Navbar from '../components/global-components/navbar';
import Banner from '../components/section-components/banner-v3';
import AboutV4 from '../components/section-components/about-v4';
import Features from '../components/section-components/features-v1';
import Footer from '../components/global-components/footer';
import { Feedbacks } from '../components/global-components/feedbacks';

const Home = () => {
    return <div>
        <Navbar />
        <Banner />
        <AboutV4 />
        <Features customClass="ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---" />
        <Feedbacks />
        <Footer />
    </div>
}

export default Home

