import React, { Fragment } from 'react';
import Navbar from '../../components/global-components/navbar';
import PageHeader from '../../components/global-components/page-header';
import Footer from '../../components/global-components/footer';
import ServiceDescription from '../../components/section-components/service-description';
import CallToActionV1 from '../../components/section-components/call-to-action-v1';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';
import AddEmergencyListing from '../../components/section-components/add-emergency-listing';

const EmergencyHousingAddListing = (props) => {
    const script = useSelector(selectScript);

    return (
        <div>
            <Navbar />
            <PageHeader headertitle={script.emergency_housing[0]} subheader={script.emergency_housing[0]} />
            <div className="row option-btns">
            <div className="col-lg-6 col-md-6 col-sm-12 center">
                <a href='/services/emergency-housing/properties' className="theme-btn-2 btn btn-effect-1 text-uppercase button-renting">
                    {script.emergency_housing[36]}
                </a>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 center">
                <a href='/services/emergency-housing/add-listing' className="theme-btn-1 btn btn-effect-1 text-uppercase button-renting">
                    {script.emergency_housing[37]}                </a>
            </div>
        </div>
            <ServiceDescription content={<Fragment>
                <div className="row">
                    <div className="coll-to-info mb-60 text-center">
                        <h1>{script.emergency_housing[7]}</h1>
                    </div>
                    <div className="row mb-40 plr--5">
                        <h5>{script.emergency_housing[8]}</h5>
                    </div>

                    <div className='row justify-content-center'>
                        <div className='col-lg-3 col-md-3 col-sm-12 col-12 flex-center'>
                            <i className="fa-solid fa-user icon"></i>
                            <h5 className="service-description">{script.emergency_housing[9]}</h5>
                        </div>
                        <i className="rotate-arrow-2 flaticon-right-arrow col-1 flex-center" />
                        <div className='col-lg-3 col-md-3 col-sm-12 col-12 flex-center'>
                            <i className="fa-solid fa-clock icon"></i>
                            <h5 className="service-description">{script.emergency_housing[10]}</h5>
                        </div>
                        <i className="rotate-arrow-2 flaticon-right-arrow col-1 flex-center" />
                        <div className='col-lg-3 col-md-3 col-sm-12 col-12 flex-center'>
                            <i className="fa-solid fa-handshake icon"></i>
                            <h5 className="service-description">{script.emergency_housing[11]} </h5>
                        </div>
                        <div className="col-lg-12">
                            <div className="mt-80 coll-to-info mb-60 text-center">
                                <h5 style={{ fontStyle: 'italic' }}>{script.emergency_housing[12]}</h5>
                            </div>
                        </div>
                    </div>

                </div></Fragment>} />
            <AddEmergencyListing setSuccess={props.setSuccess} />
            <CallToActionV1 />
            <Footer />
        </div>
    )
}

export default EmergencyHousingAddListing