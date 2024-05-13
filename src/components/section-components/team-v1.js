import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';

const TeamMember = (props) => {
	let publicUrl = process.env.PUBLIC_URL + '/'
	let imagealt = 'image'

	return <div className="col-lg-4 col-sm-6">
		<Link to='/agents'>
			<div className="ltn__team-item ltn__team-item-3---">
				<div className="team-img">
					<img src={publicUrl + `assets/img/team/${props.image}.jpg`} alt='preview' />
				</div>
				<div className="team-info">
					<h4>{props.name}</h4>
					<h6 className="ltn__secondary-color">{props.position}</h6>
					<p>{props.about}</p>
				</div>
			</div>
		</Link>
	</div>
}

const TeamV1 = () => {
	const script = useSelector(selectScript);

	return <div className="ltn__team-area pt-115 pb-90 go-top">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="section-title-area ltn__section-title-2--- text-center">
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">{script.team[0]}</h6>
						<h1 className="section-title">{script.team[1]}</h1>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<TeamMember name={script.team[2].name} image='1' position={script.team[2].position} about={script.team[2].about} />
				<TeamMember name={script.team[3].name} image='2' position={script.team[3].position} about={script.team[3].about} />
			</div>
			<div className="row justify-content-center">
				<TeamMember name={script.team[4].name} image='3' position={script.team[4].position} about={script.team[4].about} />
				<TeamMember name={script.team[5].name} image='4' position={script.team[5].position} about={script.team[5].about} />
			</div>
		</div>
	</div>
}


export default TeamV1