import React, { Fragment } from 'react';
import Navbar from '../../components/global-components/navbar';
import PageHeader from '../../components/global-components/page-header';
import RequestForm from '../../components/section-components/request-form';
import Footer from '../../components/global-components/footer';
import ServiceDescription from '../../components/section-components/service-description';
import Success from '../../components/ui/Success';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';
import { useHttpClient } from '../../hooks/http-hook';
import { useHistory } from 'react-router-dom';

const Viewing = (props) => {
    const script = useSelector(selectScript);

    const {sendRequest} = useHttpClient();

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
                    description: values.description
                }),
                {
                    "Content-Type": "application/json",
                }
            );
            props.setSuccess(
                <Success heading={script.viewing[17]} message={script.viewing[18]} onClose={() => { props.setSuccess(null) }} />
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
            </div>
            <div className='row justify-content-center'>
                <div className='col-lg-3 col-md-2 col-sm-12 col-12 flex-center'>
                    <i class="fa-solid fa-user icon"></i>
                    <h5 className="service-description">{script.viewing[4]}</h5>
                </div>
                <i className="rotate-arrow-2 flaticon-right-arrow col-lg-2 col-md-1 col-sm-12 col-12 flex-center" />
                <div className='col-lg-3 col-md-2 col-sm-12 col-12 flex-center'>
                    <i class="fa-solid fa-clock icon"></i>
                    <h5 className="service-description">{script.viewing[5]}</h5>
                </div>
                <i className="rotate-arrow-2 flaticon-right-arrow col-lg-2 col-md-1 col-sm-12 col-12 flex-center" />
                <div className='col-lg-3 col-md-2 col-sm-12 col-12 flex-center'>
                    <i class="fa-solid fa-handshake icon"></i>
                    <h5 className="service-description">{script.viewing[6]} </h5>
                </div>
            </div></Fragment>} />
        <RequestForm onSubmit={submitViewingHandler} />
        <Footer />
    </div>
}

export default Viewing
