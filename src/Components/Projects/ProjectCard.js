import React, { Component } from 'react';



class ProjectCard extends Component {
    
    render() { 
        let {img, title, description, techStack, repoLink, liveLink} = this.props;
        
        if (img === null || img === '' || !img) {
            img = 'https://i.ibb.co/nQrncMk/placeholder.png';
        }

        return (
            <div className="item card" >
                <img 
                    src={img} 
                    alt={`${title} screenshot`} 
                    className="rounded" 
                />
                <h2>{title}</h2>
                <h3>The Gist:</h3>
                <p>{description}</p>
                <h3>The Stack:</h3>
                <p>{techStack}</p>
                {/* <button>Project Details</button> */}
                <a href={repoLink}><button>Repo</button></a>
                <a href={liveLink}><button>Live Demo</button></a>
            </div>  
        );
    };
};
 
export default ProjectCard;