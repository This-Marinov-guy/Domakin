import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';

const ServiceDescription = (props) => {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    const script = useSelector(selectScript);

    return <div className="container mb-100 ">
        <div className="plr--8 pt-30 pb-30 ltn__secondary-bg position-relative text-color-white">
           {props.content}
        </div>
    </div>
}

export default ServiceDescription