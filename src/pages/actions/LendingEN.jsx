import React, { Fragment } from 'react';
import Navbar from '../../components/global-components/navbar';
import PageHeader from '../../components/global-components/page-header';
import ServiceDescription from '../../components/section-components/service-description';
import Footer from '../../components/global-components/footer';
import Success from '../../components/ui/Success';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';
import RequestForm from '../../components/section-components/request-form';
import { useHttpClient } from '../../hooks/http-hook';
import { useHistory } from 'react-router-dom';
import AddListing from '../../components/section-components/add-listing';

const LendingEN = (props) => {
    return <div>
        <Navbar />
        <PageHeader headertitle='Give out your room' subheader='Lending' />
        <ServiceDescription content={<Fragment><div className="row">
            <div className="col-lg-12">
                <div className="coll-to-info mb-60 text-center">
                    <h1>You are moving out or looking for a new flatmate?
                    </h1>
                </div>
            </div>
        </div>
            <div className="row mb-40 plr--5">
                <h5>List your room on our platform and receive a commission once the new tenant arranges a contract with the landlord or with you in case of subletting.
                </h5>
            </div>
            <div className='row justify-content-center'>
                <div className='col-lg-3 col-md-3 col-sm-12 col-12 flex-center'>
                    <i className="fa-regular fa-building icon"></i>
                    <h5 className="service-description">1. Fill your contacts and register your room
                    </h5>
                </div>
                <i className="rotate-arrow-2 flaticon-right-arrow col-1 flex-center" />
                <div className='col-lg-3 col-md-3 col-sm-12 col-12 flex-center'>
                    <i className="fa-regular fa-handshake icon"></i>
                    <h5 className="service-description">2. Once we have a prospective tenant we will contact you to arrange details and viewing
                    </h5>
                </div>
                <i className="rotate-arrow-2 flaticon-right-arrow col-1 flex-center" />
                <div className='col-lg-3 col-md-3 col-sm-12 col-12 flex-center'>
                    <i className="fa-regular fa-credit-card icon"></i>
                    <h5 className="service-description">3. Once the tenant settles a contract you will receive a one time commission of 10% of the monthly rent
                    </h5>
                </div>
            </div></Fragment>} />
        <AddListing setSuccess={props.setSuccess}/>
        <Footer />
    </div>
}

export default LendingEN

