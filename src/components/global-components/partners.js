import React from 'react'
import { useSelector } from 'react-redux'
import { selectScript } from '../../redux/language'

const Partners = () => {
    let publicUrl = process.env.PUBLIC_URL + '/'

    const script = useSelector(selectScript)

    return (
        <div className='container mt-40 mb-20'>
            <h2 className='text-center'>{script.partners[0]}</h2>
            <div className='row partners text-center'>
                <div className='col-lg-3 col-md-6 col-sm-6'>
                    <a href='https://bulgariansocietygro.nl/' target='_blank'>
                        <img src={publicUrl + "assets/img/partners/2.jpg"} style={{ borderRadius: '50%' }} alt="Partner" className='partner-img' />
                    </a>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <a href='https://www.cooltravel.bg/' target='_blank'>
                        <img src={publicUrl + "assets/img/partners/3.png"} alt="Partner" className='partner-img cool-travel' />
                    </a>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6'>
                    <a href='https://studybuddy.bg/' target='_blank'>
                        <img src={publicUrl + "assets/img/partners/3.png"} alt="Partner" className='partner-img' />
                    </a>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6'>
                    <a href='https://en.unify.bg/' target='_blank'>
                        <img src={publicUrl + "assets/img/partners/4.png"} alt="Partner" className='partner-img' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Partners