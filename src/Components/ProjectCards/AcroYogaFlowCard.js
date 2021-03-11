import React from 'react'
import img from '../../img/smartmockups_acroyoga-flow.png';

export default function AcroYogaFlowCard() {

    return (
        <div className="item card" >
                <a href='https://acroyoga-flow.vercel.app/'>
                    <img 
                        src={img} 
                        alt={`AcroYoga Flow screenshot`} 
                        className="rounded" 
                    />
                </a>
                
                <h2>AcroYoga Flow</h2>

                <h3>The Gist:</h3>
                <p>Full-stack app to help users design an AcroYoga flow.</p>
                <p>Interactively and accessibly design an AcroYoga sequence that is comprised of position images and the position names (aka 'acroyoga elements')</p>
                <p>Learned to develop with React Hooks, Styled Components, and React-Beautiful-DnD</p>
                
                <h3>The Stack:</h3>
                <p>React, HTML5, CSS3, JavaScript ES6 | PostgreSQL, Node, Express, Knex, Mocha/Chai</p>
                {/* <button>Project Details</button> */}
                <a href='https://github.com/ZenMnky/acroyoga-flow-client'><button>Repo</button></a>
                <a href='https://acroyoga-flow.vercel.app/'><button>Live Demo</button></a>
        </div>  
    )
}
