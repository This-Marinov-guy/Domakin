import React, { Fragment } from 'react';
import Navbar from '../../components/global-components/navbar';
import PageHeader from '../../components/global-components/page-header';
import ProSlider from '../../components/section-components/product-slider-v4';
import Footer from '../../components/global-components/footer';
import ServiceDescription from '../../components/section-components/service-description';
import Success from '../../components/ui/Success';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';
import { useHttpClient } from '../../hooks/http-hook';
import { useHistory } from 'react-router-dom';

const Viewing = (props) => {
    const script = useSelector(selectScript);

    const { sendRequest } = useHttpClient()

    const history = useHistory()

    const submitRentingHandler = async (values) => {
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
        <PageHeader headertitle={script.renting[0]} subheader={script.renting[1]} />
        <ServiceDescription content={<Fragment><div className="row">
            <div className="col-lg-12">
                <div className="coll-to-info mb-60 text-center">
                    <h1>{script.renting[2]}</h1>
                </div>
            </div>
        </div>
            <div className="row mb-40 plr--5">
                <h5>{script.renting[3]}</h5>
            </div>
        </Fragment>} />
        <ProSlider onSubmit={submitRentingHandler} />
        <Footer />
    </div>
}

export default Viewing
