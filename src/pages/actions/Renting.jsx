import React, { Fragment } from 'react';
import Navbar from '../../components/global-components/navbar';
import PageHeader from '../../components/global-components/page-header';
import ProSlider from '../../components/section-components/product-slider-v4';
import Footer from '../../components/global-components/footer';
import ServiceDescription from '../../components/section-components/service-description';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';

const Viewing = (props) => {
    const script = useSelector(selectScript);

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
        <ProSlider />
        <Footer />
    </div>
}

export default Viewing
