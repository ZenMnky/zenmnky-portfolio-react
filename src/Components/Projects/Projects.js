import React, {Component} from 'react';
import store from '../../store';
import ProjectCard from './ProjectCard';
import cuid from 'cuid';
const { projects } = store;


class Projects extends Component {
    render(){
        console.log('projects: ', projects)
        let projectContent = projects.map(project => <ProjectCard {...project} key={cuid()}/>)

        return(
            <article className="container" id="projects">
                <h2>Projects</h2>
                <div className="group">
                    {projectContent}
                </div>
            </article>
        );
    }
};

export default Projects;