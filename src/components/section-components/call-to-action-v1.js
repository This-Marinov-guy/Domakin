import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';

const CallToActonV1 = () => {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

		const script = useSelector(selectScript)

    return <div className="ltn__call-to-action-area call-to-action-5" >
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
			          <div className="coll-to-info text-color-white">
			            <h1>{script.feedbacks[15]}</h1>
			            <p style={{width:'90%'}}>{script.feedbacks[16]}</p>
			          </div>
			          <div className="btn-wrapper go-top">
			            <Link className="btn btn-effect-3 btn-white" to="/feedbacks">{script.feedbacks[17]}<i className="icon-next" /></Link>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }


export default CallToActonV1