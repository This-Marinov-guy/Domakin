import React from 'react';
import Navbar from '../components/global-components/navbar-v3';
import Banner from '../components/section-components/banner-v3';
import Features from '../components/section-components/features-v1';
import Footer from '../components/global-components/footer';
import TeamV1 from '../components/section-components/team-v1';

const Home = () => {
    return <div>
        <Navbar />
        <Banner />
        <Features customClass="ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---" />
        <TeamV1 />
        <Footer />
    </div>
}

export default Home

