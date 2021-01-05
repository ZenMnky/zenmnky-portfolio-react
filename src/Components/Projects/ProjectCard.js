import React, { Component } from 'react';


class ProjectCard extends Component {
    
    render() { 
        let {img, title, description, techStack, repoLink, liveLink} = this.props;

        return (
            <div className="item card" >
                <img 
                    src={img} 
                    alt={`${title} screenshot`} 
                    className="rounded" 
                />
                <h3>{title}</h3>
                <p>{description}</p>
                <p>The Stack: {techStack}</p>
                <a href={repoLink}><button>Repo</button></a>
                <a href={liveLink}><button>Live Demo</button></a>
            </div>  
        );
    };
};
 
export default ProjectCard;