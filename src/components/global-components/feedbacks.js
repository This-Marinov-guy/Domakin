import React, { useEffect, useState } from 'react'
import { useHttpClient } from '../../hooks/http-hook'
import { Spinner } from 'react-bootstrap'

const CreateFeedback = () => {
    return (
        <div>feedbacks</div>
    )
}

const Feedbacks = () => {
    const [feedbacks, setFeedbacks] = useState()

    const { loading, sendRequest } = useHttpClient()

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const responseData = await sendRequest('feedback/get-feedbacks');
                setFeedbacks(responseData.feedbacks)
            } catch (err) {

            }
            fetchFeedbacks()
        }
    }, [sendRequest])

    return (
        <div className='container'>
            {loading ? <Spinner style={{ margin: '10px auto' }} animation="border" /> :
                <div>
                    {feedbacks.length = 0 ? <div><p>No feedbacks yet - Be the first!</p></div> : <div>
                        {feedbacks.map((feedback, index) => {
                            return <div>
                                <p>{feedback.feedback}</p>
                                <p>-{feedback.name}</p>
                            </div>
                        })}
                    </div>}
                </div>}
        </div>
    )
}

export { CreateFeedback, Feedbacks }