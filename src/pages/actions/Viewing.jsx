import React, { Fragment } from 'react';
import Navbar from '../../components/global-components/navbar';
import PageHeader from '../../components/global-components/page-header';
import RequestFormV2 from '../../components/section-components/request-form-v2';
import Footer from '../../components/global-components/footer';
import ServiceDescription from '../../components/section-components/service-description';
import Success from '../../components/ui/Success';
import CallToActionV1 from '../../components/section-components/call-to-action-v1';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';
import { useHttpClient } from '../../hooks/http-hook';
import { useHistory } from 'react-router-dom';

const Viewing = (props) => {
    const script = useSelector(selectScript);

    const { sendRequest } = useHttpClient();

    const history = useHistory()

    const submitViewingHandler = async (values) => {
        try {
            const responseData = await sendRequest(
                "viewing/create-viewing",
                "POST",
                JSON.stringify({
                    name: values.name,
                    surname: values.surname,
                    phone: values.phone,
                    email: values.email,
                    city: values.city,
                    address: values.address,
                    date: values.date,
                    time: values.time,
                    description: values.description
                }),
                {
                    "Content-Type": "application/json",
                }
            );
            props.setSuccess({
                heading: script.viewing[18],
                message: script.viewing[19],
            }
            );
            history.push("/");
        } catch (err) { }
    }

    return <div>
        <Navbar />
        <PageHeader headertitle={script.viewing[0]} subheader={script.viewing[1]} />
        <ServiceDescription content={<Fragment><div className="row">
            <div className="col-lg-12">
                <div className="coll-to-info mb-60 text-center">
                    <h1>{script.viewing[2]}</h1>
                </div>
            </div>
        </div>
            <div className="row mb-40 plr--5">
                <h5>{script.viewing[3]}</h5>
                <h5 className='mt-10'>{script.viewing[4]}</h5>
            </div>
            <div className='row justify-content-center'>
                <div className='col-lg-3 col-md-3 col-sm-12 col-12 flex-center'>
                    <i className="fa-solid fa-user icon"></i>
                    <h5 className="service-description">{script.viewing[5]}</h5>
                </div>
                <i className="rotate-arrow-2 flaticon-right-arrow col-1 flex-center" />
                <div className='col-lg-3 col-md-3 col-sm-12 col-12 flex-center'>
                    <i className="fa-solid fa-clock icon"></i>
                    <h5 className="service-description">{script.viewing[6]}</h5>
                </div>
                <i className="rotate-arrow-2 flaticon-right-arrow col-1 flex-center" />
                <div className='col-lg-3 col-md-3 col-sm-12 col-12 flex-center'>
                    <i className="fa-solid fa-handshake icon"></i>
                    <h5 className="service-description">{script.viewing[7]} </h5>
                </div>
            </div></Fragment>} />
        <RequestFormV2 onSubmit={submitViewingHandler} />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Viewing
