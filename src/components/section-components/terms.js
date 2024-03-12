import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';

const Terms = () => {

    let publicUrl = process.env.PUBLIC_URL + '/'
    const script = useSelector(selectScript);

    return <div className="ltn__faq-area mb-100">
        <div className="container">
            <h4>{script.privacyPolicyContent[2]}
            </h4>
            <p>                                    {script.privacyPolicyContent[3]}
            </p>
            <div className="row">
                <div className="col-lg-8">
                    <div className="ltn__faq-inner ltn__faq-inner-2">
                        <div id="accordion_2">
                            {/* card */}
                            <div className="card">
                                <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-1" aria-expanded="false">
                                    {script.privacyPolicyContent[4]}
                                </h6>
                                <div id="faq-item-2-1" className="collapse" data-bs-parent="#accordion_2">
                                    <div className="card-body">
                                        <p>                                {script.privacyPolicyContent[5]}</p>
                                    </div>
                                </div>
                            </div>
                            {/* card */}
                            <div className="card">
                                <h6 className="ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-2" aria-expanded="true">
                                    {script.privacyPolicyContent[6]}
                                </h6>
                                <div id="faq-item-2-2" className="collapse show" data-bs-parent="#accordion_2">
                                    <div className="card-body">

                                        <p>                                    {script.privacyPolicyContent[7]}
                                        </p>                                    </div>
                                </div>
                            </div>
                            {/* card */}
                            <div className="card">
                                <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-3" aria-expanded="false">
                                    {script.privacyPolicyContent[8]}
                                </h6>
                                <div id="faq-item-2-3" className="collapse" data-bs-parent="#accordion_2">
                                    <div className="card-body">
                                        <p>                                    {script.privacyPolicyContent[9]}
                                        </p>                                    </div>
                                </div>
                            </div>
                            {/* card */}
                            <div className="card">
                                <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-4" aria-expanded="false">
                                    {script.privacyPolicyContent[10]}
                                </h6>
                                <div id="faq-item-2-4" className="collapse" data-bs-parent="#accordion_2">
                                    <div className="card-body">
                                        <p>                                    {script.privacyPolicyContent[11]}
                                        </p>                                    </div>
                                </div>
                            </div>
                            {/* card */}
                            <div className="card">
                                <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-5" aria-expanded="false">
                                    {script.privacyPolicyContent[12]}
                                </h6>
                                <div id="faq-item-2-5" className="collapse" data-bs-parent="#accordion_2">
                                    <div className="card-body">
                                        <p>                                    {script.privacyPolicyContent[13]}
                                        </p>                                    </div>
                                </div>
                            </div>
                            {/* card */}
                            <div className="card">
                                <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-6" aria-expanded="false">
                                    {script.privacyPolicyContent[14]}
                                </h6>
                                <div id="faq-item-2-6" className="collapse" data-bs-parent="#accordion_2">
                                    <div className="card-body">
                                        <p>                                    {script.privacyPolicyContent[15]}
                                        </p>                                    </div>
                                </div>
                            </div>
                            {/* card */}
                            <div className="card">
                                <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-7" aria-expanded="false">
                                    {script.privacyPolicyContent[16]}
                                </h6>
                                <div id="faq-item-2-7" className="collapse" data-bs-parent="#accordion_2">
                                    <div className="card-body">
                                        <p>                                    {script.privacyPolicyContent[17]}
                                        </p>                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    {/* Banner Widget */}
                    <aside className="sidebar-area ltn__right-sidebar">
                        <div className="widget ltn__banner-widget go-top">
                            <img src={publicUrl + "assets/img/logo.png"} alt="Banner Image" />
                        </div>
                        <div className="need-support text-center mt-100">
                            <h3>                                {script.privacyPolicyContent[18]}
                            </h3>
                            <div className="btn-wrapper mb-30 go-top">
                                <Link to="/contact" className="theme-btn-1 btn">{script.privacyPolicyContent[19]}</Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </div>

}


export default Terms