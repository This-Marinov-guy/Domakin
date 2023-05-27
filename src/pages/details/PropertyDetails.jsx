import React from 'react';
import Navbar from '../../components/global-components/navbar';
import PageHeader from '../../components/global-components/page-header';
import ProductSlider from '../../components/shop-components/product-slider-v1';
import ProductDetails from '../../components/shop-components/shop-details';
import CallToActionV1 from '../../components/section-components/call-to-action-v1';
import Footer from '../../components/global-components/footer';

const PropertyDetails = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Product Details" customclass="mb-0" />
        <ProductDetails />
        <Footer />
    </div>
}

export default PropertyDetails

