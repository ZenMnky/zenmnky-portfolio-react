import React from 'react'
import img from '../../img/smartmockups_spaced-repetition.png';

export default function SpacedRepetitionCard() {

    return (
        <div className="item card" >
                <img 
                    src={img} 
                    alt={`spaced repetition screenshot`} 
                    className="rounded" 
                />
                <h2>Spaced Repetition</h2>

                <h3>The Gist:</h3>
                <p>Helps users learn a set of Korean words through spaced repetition.</p>
                <p>The purpose of this project was to practice fullstack test-driven development and working with a linked-list data structure.</p>
                <p>Built up from starter code containing a basic skeleton on the back end, and fullstack tests.</p>
                
                <h3>The Stack:</h3>
                <p>React, PostgreSQL, Express, Node, HTML5, CSS3, JS ES6</p>
                {/* <button>Project Details</button> */}
                <a href='https://github.com/ZenMnky/spaced-repetition'><button>Repo</button></a>
                <a href='https://spaced-repetition-omega.vercel.app/'><button>Live Demo</button></a>
        </div>  
    )
}
