import React from 'react';
import Navbar from '../../components/global-components/navbar';
import PageHeader from '../../components/global-components/page-header';
import Footer from '../../components/global-components/footer';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';
import Feedbacks from '../../components/global-components/feedbacks';
import Donations from '../../components/section-components/donations';


const FeedbackPage = () => {

    const script = useSelector(selectScript)

    return <div>
        <Navbar />
        <PageHeader headertitle={script.feedbacks[0]} subheader={script.feedbacks[2]} />
        <Donations />
        <Feedbacks />
        <Footer />
    </div>
}

export default FeedbackPage

