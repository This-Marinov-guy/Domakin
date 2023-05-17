import React from 'react';
import Navbar from '../../components/global-components/navbar';
import PageHeader from '../../components/global-components/page-header';
import TeamDetails from '../../components/section-components/team-details';
import Footer from '../../components/global-components/footer';
import { useSelector } from 'react-redux';
import { selectScript } from '../../redux/language';

const Agents = () => {

  const script = useSelector(selectScript);

    return <div>
        <Navbar />
        <PageHeader headertitle={script.team[0]} subheader={script.team[1]} />
        <TeamDetails />
        <Footer />
    </div>
}

export default Agents

