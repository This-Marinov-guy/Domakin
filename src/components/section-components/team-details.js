import React from 'react';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';

const TeamMEmberDetails = (props) => {
    let publicUrl = process.env.PUBLIC_URL + '/'

    return <div className="row mb-80">
        <div className="col-lg-4">
            <div className="ltn__team-details-member-info text-center mb-40">
                <div className="team-details-img">
                    <img src={publicUrl + `assets/img/team/${props.image}.jpg`} alt="Team Member Image" />
                </div>
                <h2>{props.name}</h2>
                <h6 className="text-uppercase ltn__secondary-color">{props.position}</h6>

            </div>
        </div>
        <div className="col-lg-8">
            <div className="ltn__team-details-member-info-details">
                <p>{props.about}</p>
                {/* <div className="ltn__social-media-3">
                    <ul>
                        {props.social && props.social.map((value) => {
                            return (<li key={value.type}><a href={value.href} target='_blank'><i className={`fab fa-${value.type.toLowerCase()}`} /></a></li>
                            )
                        })}
                    </ul>
                </div> */}
            </div>
        </div>
    </div>
}


const TeamDetails = () => {
    let publicUrl = process.env.PUBLIC_URL + '/'

    const script = useSelector(selectScript);

    return <div className="ltn__our-history-area pb-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__our-history-inner">
                        {/* <div className="ltn__tab-menu text-uppercase">
                            <div className="nav">
                                <a className="active show" data-bs-toggle="tab" href="#liton_tab_2_1">{script.team[8]}</a>
                                <a data-bs-toggle="tab" href="#liton_tab_2_2">{script.team[9]}</a>
                                <a data-bs-toggle="tab" href="#liton_tab_2_3">IT</a>
                                <a data-bs-toggle="tab" href="#liton_tab_2_4">{script.team[10]}</a>
                            </div>
                        </div> */}
                        <div className="tab-content mt-100">
                            <TeamMEmberDetails name={script.team[2].name} image='1' position={script.team[2].position} about={script.team[2].aboutExtra} social={[{ href: '', type: 'Facebook-f' }, { href: '', type: 'Linkedin' }]} />
                            <TeamMEmberDetails name={script.team[5].name} image='4' position={script.team[5].position} about={script.team[5].aboutExtra} social={[{ href: '', type: 'Facebook-f' }, { href: '', type: 'Linkedin' }]} />
                            <TeamMEmberDetails name={script.team[3].name} image='2' position={script.team[3].position} about={script.team[3].aboutExtra} social={[{ href: '', type: 'Facebook-f' }, { href: '', type: 'Linkedin' }]} />
                            <TeamMEmberDetails name={script.team[4].name} image='3' position={script.team[4].position} about={script.team[4].aboutExtra} social={[{ href: '', type: 'Facebook-f' }, { href: '', type: 'Linkedin' }]} />
                            <TeamMEmberDetails name={script.team[6].name} image='6' position={script.team[6].position} about={script.team[6].aboutExtra} social={[{ href: '', type: 'Facebook-f' }, { href: '', type: 'Linkedin' }]} />
                            <TeamMEmberDetails name={script.team[7].name} image='5' position={script.team[7].position} about={script.team[7].aboutExtra} social={[{ href: '', type: 'Facebook-f' }, { href: '', type: 'Linkedin' }]} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


export default TeamDetails