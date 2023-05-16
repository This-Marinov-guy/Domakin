import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';

const ServiceDescription = () => {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    const script = useSelector(selectScript);

    return <div className="container mb-100 ">
        <div className="plr--8 pt-30 pb-30 ltn__secondary-bg position-relative text-color-white">
            <div className="row">
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
                <h5 className="col-lg-2 col-sm-12 col-12 service-description">{script.viewing[4]}</h5>
                <i className="rotate-arrow flaticon-right-arrow col-lg-2 col-sm-12 col-12" />
                <h5 className="col-lg-2 col-sm-12 col-12 service-description">{script.viewing[5]}</h5>
                <i className="rotate-arrow flaticon-right-arrow col-lg-2 col-sm-12 col-12" />
                <h5 className="col-lg-2 col-sm-12 col-12 service-description">{script.viewing[6]} </h5>
            </div>

        </div>
    </div>
}

export default ServiceDescription