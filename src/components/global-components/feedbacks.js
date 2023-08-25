import React from 'react'
import { useHttpClient } from '../../hooks/http-hook'
import CreateFeedback from './createFeedback';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useSelector } from 'react-redux'
import { selectScript } from '../../redux/language'
import { selectFeedbacks } from '../../redux/feedbacks';

const Feedbacks = () => {
    const { loading } = useHttpClient()

    const script = useSelector(selectScript)

    const feedbacks = useSelector(selectFeedbacks)


    return <div className='container mt-40'>
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2--- text-center">
                    <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">{script.feedbacks[1]}</h6>
                    <h1 className="section-title">{script.feedbacks[13]}</h1>
                </div>
            </div>
        </div>
        {loading ? <div className='text-center'>            <ProgressSpinner style={{ width: '30px', height: '30px' }} />
</div> :
            <div>{feedbacks.length === 0 ?
                <div className='text-center'>
                    <p>No feedbacks yet - A chance to be the first!</p>
                </div> :
                <div className="row ltn__testimonial-slider-5-active slick-arrow-1">
                    {feedbacks.map((feedback, index) => {
                        return <div key={index} className="col-lg-4">
                            <div className="ltn__testimonial-item ltn__testimonial-item-7">
                                <div className="ltn__testimoni-info">
                                    <p><i className="flaticon-left-quote-1" />
                                        {feedback.feedback}</p>
                                    <div className="ltn__testimoni-info-inner">

                                        <div className="ltn__testimoni-name-designation">
                                            <h5>{feedback.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>}
            </div>}
        <CreateFeedback />
    </div>
}


export default Feedbacks 