import React, { useEffect, useState } from 'react'
import { useHttpClient } from '../../hooks/http-hook'
import CreateFeedback from './createFeedback';
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux'
import { selectScript } from '../../redux/language'

const Feedbacks = (props) => {
    const [feedbacks, setFeedbacks] = useState([])

    const { loading, sendRequest } = useHttpClient()

    const script = useSelector(selectScript)

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const responseData = await sendRequest('feedback/get-feedbacks');
                setFeedbacks(responseData.feedbacks.filter(feedback => feedback.approved === true))
            } catch (err) {

            }
        }
        fetchFeedbacks()
    }, [sendRequest])

    return <div className='container mt-40 mb-120'>
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2--- text-center">
                    <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">{script.feedbacks[1]}</h6>
                    <h1 className="section-title">{script.feedbacks[2]}</h1>
                </div>
            </div>
        </div>
        {loading ? <div className='text-center'><Spinner variant='primary' animation="border" /></div> :
            <div>{feedbacks.length === 0 ?
                <div className='text-center'>
                    <p>No feedbacks yet - Be the first!</p>
                </div> :
                <div className='feedback_display'>
                    {feedbacks.map((feedback, index) => {
                        return <div key={index} className={index % 2 === 0 ? 'feedback_left' : 'feedback_right'}>
                            <p>"{feedback.feedback}"</p>
                            <p>- {feedback.name}</p>
                        </div>
                    })}
                </div>}
            </div>}
        <CreateFeedback />
    </div>
}


export default Feedbacks 