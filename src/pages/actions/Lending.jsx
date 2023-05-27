import React, { Fragment } from 'react';
import Navbar from '../../components/global-components/navbar';
import PageHeader from '../../components/global-components/page-header';
import ViewingForm from '../../components/section-components/viewing-form';
import ServiceDescription from '../../components/section-components/service-description';
import Footer from '../../components/global-components/footer';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';

const Lending = (props) => {
    const script = useSelector(selectScript)

    return <div>
        <Navbar />
        <PageHeader headertitle={script.addDocument[0]} subheader={script.addDocument[1]} />
        <ServiceDescription content={<Fragment><div className="row">
            <div className="col-lg-12">
                <div className="coll-to-info mb-60 text-center">
                    <h1>{script.viewing[2]}</h1>
                </div>
            </div>
        </div>
            <div className="row mb-40 plr--5">
                <h5>{script.viewing[3]}</h5>
            </div>
            <div className='row justify-content-center'>
                <div className='col-lg-2 col-sm-12 col-12 flex-center'>
                    <i class="fa-solid fa-user icon"></i>
                    <h5 className="service-description">{script.viewing[4]}</h5>
                </div>
                <i className="rotate-arrow flaticon-right-arrow col-lg-2 col-sm-12 col-12 flex-center" />
                <div className='col-lg-2 col-sm-12 col-12 flex-center'>
                    <i class="fa-solid fa-clock icon"></i>
                    <h5 className="service-description">{script.viewing[5]}</h5>
                </div>
                <i className="rotate-arrow flaticon-right-arrow col-lg-2 col-sm-12 col-12 flex-center" />
                <div className='col-lg-2 col-sm-12 col-12 flex-center'>
                    <i class="fa-solid fa-handshake icon"></i>
                    <h5 className="service-description">{script.viewing[6]} </h5>
                </div>
            </div></Fragment>} />
        <ViewingForm setSuccess={props.setSuccess} />
        <Footer />
    </div>
}

export default Lending

