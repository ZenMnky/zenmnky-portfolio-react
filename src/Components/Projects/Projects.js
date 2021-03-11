import React, {Component} from 'react';
import cuid from 'cuid';

// import ProjectCard from './ProjectCard';
// import store from '../../store';
// const { projects } = store;

import MioCard from '../ProjectCards/MioCard';
import ArtistFindCard from '../ProjectCards/ArtistFindCard';
import SpacedRepetitionCard from '../ProjectCards/SpacedRepetitionCard';
import AcroYogaFlowCard from '../ProjectCards/AcroYogaFlowCard';


class Projects extends Component {
    render(){
        // let projectContent = projects.map(project => <ProjectCard {...project} key={cuid()}/>)

        return(
            <article className="container" id="projects">
                <h2 className='sectionHeader'>Projects</h2>
                <div className="group">
                    <AcroYogaFlowCard key={cuid()} />
                    <MioCard key={cuid()}/>
                    <ArtistFindCard key={cuid()} />
                    <SpacedRepetitionCard key={cuid()} />
                </div>
            </article>
        );
    }
};

export default Projects;