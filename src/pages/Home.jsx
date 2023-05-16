import React from 'react';
import Navbar from '../components/global-components/navbar-v3';
import Banner from '../components/section-components/banner-v3';
import SearchForm from '../components/section-components/search-form';
import Features from '../components/section-components/features-v1';
import ProductSlider from '../components/section-components/product-slider-v3';
import FeaturedItem from '../components/section-components/featured-item-v1';
import Video from '../components/section-components/video-v1';
import Testimonial from '../components/section-components/testimonial-v3';
import Sponsor from '../components/section-components/sponsor-v1';
import BlogSlider from '../components/blog-components/blog-slider-v1';
import CallToActionV1 from '../components/section-components/call-to-action-v1';
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

